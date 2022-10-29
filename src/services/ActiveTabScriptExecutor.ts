import { IRoll20ChatDOMResponse, ISerializedRoll20ChatDOMResponse } from '../model/Roll20Interfaces';
import * as Roll20ChatService from './Roll20ChatService';

/**
 * @summary Fetches roll20 chat DOM from the active tab.
 * @returns {IRoll20ChatDOMResponse} DOM for the roll20 chat.
 */
export const fetchRoll20ChatDOM = async (): Promise<IRoll20ChatDOMResponse> => {
  const currentTabId = await getCurrentTabId();
  const scriptResult = await executeRoll20ChatDOMRetrieverScript(currentTabId);

  const deserializedResult = {
    ...(scriptResult.error && {
      error: JSON.parse(scriptResult.error)
    }),
    ...(scriptResult.roll20ChatHtml && {
      roll20ChatDOM: new DOMParser().parseFromString(scriptResult.roll20ChatHtml, 'text/html')
    })
  };

  if (deserializedResult.roll20ChatDOM
    && deserializedResult.roll20ChatDOM.getElementsByTagName('parsererror').length) {
    throw new ReferenceError('There was an error parsing the returned html into DOM.');
  }

  return deserializedResult;
};

const getCurrentTabId = async (): Promise<number> => {
  const [currentTab,] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  if (!currentTab.id) {
    throw new TypeError('Error connecting to tab.');
  }

  return currentTab.id;
};

const executeRoll20ChatDOMRetrieverScript = async (tabId: number): Promise<ISerializedRoll20ChatDOMResponse> => {
  const roll20ChatParserScriptResults = await chrome.scripting.executeScript({
    func: Roll20ChatService.retrieveSerializedRoll20ChatHtml,
    target: {
      tabId: tabId
    }
  });

  console.log(roll20ChatParserScriptResults);

  if (roll20ChatParserScriptResults.length === 0
    || !roll20ChatParserScriptResults[0].result) {
    throw new ReferenceError('No result was passed back.');
  }

  const scriptResult = roll20ChatParserScriptResults[0].result;

  if (scriptResult instanceof Object
    && 'log' in scriptResult
    && ('roll20ChatHtml' in scriptResult
      || 'error' in scriptResult)) {
    return scriptResult as ISerializedRoll20ChatDOMResponse;
  } else {
    throw new SyntaxError('Result was of incorrect type');
  }
};
