import { IRollData, IRollRecord } from '../model/DiceRollInterfaces';

/**
 * @description Fetches roll data from a roll20 game log.
 * @returns Roll data.
 */
export const fetchRoll20DiceRollData = async (): Promise<IRollData> => {
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

const executeRoll20ChatParserScript = async (tabId: number): Promise<IRollData> => {
  const roll20ChatParserScriptResults = await chrome.scripting.executeScript({
    func: parseRoll20Chat,
    target: {
      tabId: tabId
    }
  });
  
  if (roll20ChatParserScriptResults.length === 0) {
    throw new ReferenceError('No result was passed back.');
  }
  
  const scriptResult = roll20ChatParserScriptResults[0];
  
  // TODO we are getting a null result here because an error is being thrown during script execution.
  // Need to rip out the parsing logic and test it.
  console.log(scriptResult);

  if (scriptResult.result.data) {
    return scriptResult.result.data as IRollData;
  } else if (scriptResult.result.error) {
    throw new ReferenceError(scriptResult.result.error);
  } else {
    throw new ReferenceError('No data was passed back.');
  }
};

/**
 * Below functions serve to parse roll20 game chat for dice rolls.
 */

const d20RollsKey = 'd20Rolls';

 let lastMessageBy: string;
 const parsedRoll20Data: { rollerNames: string[]; [d20RollsKey]: IRollRecord[] } = {
  [d20RollsKey]: [],
  rollerNames: [],
  // only d20 scores for now...
  // damage rolls?
  // 2d6?
};

const parseRoll20Chat = (): any => {
  const response: { data?: any; error?: string;} = {};

  console.log('starting roll20_chat_parser...');

  const textChat = document.querySelector('#textchat > .content');
  if (window.location.host === 'app.roll20.net' && textChat) {
    // if we find a roll20 chat, gather data
  
    textChat.querySelectorAll('.message').forEach(processMessage);
  
    parsedRoll20Data.rollerNames = [ ...new Set(parsedRoll20Data.rollerNames) ];
  
    if (parsedRoll20Data.rollerNames.length) {
      response.data = parsedRoll20Data;
    } else {
      response.error = 'No player messages were found in the chat';
    }
  } else {
    response.error = 'Tab needs to contain a roll20 chat log in order to use this extension.';
  }

  console.log('finished parsing results', response);

  return response;
};

/**
 * @description function that processes every message in roll20 chat
 * @param element 
 * @param key 
 */
const processMessage = (element: Element, key: number) => {
  const byElement = element.querySelector('.by');
  if (byElement) {
    // if this message has a player name associated with it, we keep it
    // for repeat messages
    const messageSenderText = byElement.textContent;
    lastMessageBy = messageSenderText?.substring(0, messageSenderText.lastIndexOf(':')).trim() ?? '';
  }

  if (element.className.includes('rollresult')) {
    // This message is a standard roll20 d20 dice roll
    const standardD20RollSelector = element.querySelectorAll('.diceroll.d20');
    if (standardD20RollSelector.length) {
      standardD20RollSelector.forEach((d20DiceRollElement: Element, key: number) => {
        const rollResult = parseStandardRoll(d20DiceRollElement);
        addD20RollResult(lastMessageBy, rollResult);
      });
    }
  }
  
  if (element.querySelector('div[class^=\'sheet-rolltemplate\']')) {
    // This message contains a templated roll from a Roll20 character sheet.
    const inlineRollSelector = element.querySelectorAll('span.inlinerollresult');
    if (inlineRollSelector.length) {
      inlineRollSelector.forEach((d20DiceRollElement: Element, key: number) => {
        const rollResult = parseInlineD20Roll(element);
        addD20RollResult(lastMessageBy, rollResult);
      });
    }
  }

  // add case for Beyond20 roll template
  if (false) {

  }
};

const parseStandardRoll = (rollElement: Element): string => rollElement.querySelector('.didroll')?.textContent ?? 'x';

const parseInlineD20Roll = (rollElement: Element): string => {
  // For whatever reason the inline rolls use an html element attribute
  // named "original-title" which is NOT a valid attribute name, jquery
  // separates this into two attributes which is why we also search for
  // an attribute named "title".
  const inlineRoll = rollElement.getAttribute('title')
    ? rollElement.getAttribute('title')
    : rollElement.getAttribute('original-title');
  const inlineRollAsDoc = new DOMParser().parseFromString(inlineRoll ?? '', 'text/xml');
  const rollResult = inlineRollAsDoc.querySelector('.basicdiceroll')?.textContent;
  
  if (inlineRoll?.includes('Rolling 1d20')) {
    return rollResult ?? 'x';
  }

  return '';
}

const addD20RollResult = (rollerName: string, rollResult: string) => {
  addRollResult(rollerName, d20RollsKey, rollResult);
}

const addRollResult = (rollerName: string, rollType: string, rollResult: string) => {
  if (rollResult) {
    parsedRoll20Data[rollType] = [
      ...parsedRoll20Data.d20Rolls,
      {
        rollerName: rollerName,
        result: rollResult
      }
    ];

    parsedRoll20Data.rollerNames = [
      ...parsedRoll20Data.rollerNames,
      rollerName
    ]
  }
}