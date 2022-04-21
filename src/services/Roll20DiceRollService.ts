const jqueryScriptFilename = 'jquery-2.1.0.min.js';
const Roll20ChatParserScriptFilename = 'roll20_chat_parser.js';

export const fetchRoll20DiceRollData = async (): Promise<any> => {
  const currentTabId = await getCurrentTabId();
  const roll20DiceRollData = await executeRoll20ChatParserScript(currentTabId);

  return roll20DiceRollData;
};

const getCurrentTabId = async (): Promise<number> => {
  const [currentTab] = await window.chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  if (!currentTab.id) {
    throw new TypeError('Error connecting to tab.');
  }

  return currentTab.id;
}

const executeRoll20ChatParserScript = async (tabId: number): Promise<any> => {
  await chrome.scripting.executeScript({
    files: [jqueryScriptFilename],
    target: {
      tabId: tabId
    }
  });

  const roll20ChatParserScriptResults = await chrome.scripting.executeScript({
    files: [Roll20ChatParserScriptFilename],
    target: {
      tabId: tabId
    }
  });

  if (roll20ChatParserScriptResults.length === 0) {
    throw new ReferenceError('No result was passed back.');
  }
  
  const scriptResult = roll20ChatParserScriptResults[0];
  
  if (scriptResult.result.data) {
    return scriptResult.result.data;
  } else if (scriptResult.result.error) {
    throw new ReferenceError(scriptResult.result.error);
  }
};