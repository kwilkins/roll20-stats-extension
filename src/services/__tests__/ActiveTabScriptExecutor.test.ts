import * as ActiveTabScriptExecutor from '../ActiveTabScriptExecutor';

const chromeTabsQueryMock = jest.fn();
const chromeScriptingExecuteScriptMock = jest.fn();

describe('ActiveTabScriptExecutor', () => {
  beforeEach(() => {
    window.chrome = {
      tabs: {
        query: chromeTabsQueryMock
      },
      scripting: {
        executeScript: chromeScriptingExecuteScriptMock
      }
    } as any;
  });
  
  it('Returns error when tab id is undefined', async () => {
    const activeTab = {
      id: undefined
    } as chrome.tabs.Tab;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(TypeError);
  });
  
  it('Returns error when no script results were returned', async () => {
    const activeTab: chrome.tabs.Tab = {
      id: 7
    } as any;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
    chromeScriptingExecuteScriptMock.mockResolvedValue([]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(ReferenceError);
  });
  
  it('Returns error when more than one script results were returned', async () => {
    const activeTab: chrome.tabs.Tab = {
      id: 7
    } as any;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
    const scriptResult = {
  
    } as chrome.scripting.InjectionResult;
    chromeScriptingExecuteScriptMock.mockResolvedValue([scriptResult, scriptResult]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(ReferenceError);
  });
  
  it('Returns error when the script result\'s result property is undefined', async () => {
    const activeTab: chrome.tabs.Tab = {
      id: 7
    } as any;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
    const scriptResult = {
      result: undefined
    } as chrome.scripting.InjectionResult;
    chromeScriptingExecuteScriptMock.mockResolvedValue([scriptResult, scriptResult]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(ReferenceError);
  });
  
  it('Returns error when the script result\'s result property is primitive', async () => {
    const activeTab: chrome.tabs.Tab = {
      id: 7
    } as any;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
    const scriptResult = {
      result: 'I am a string'
    } as chrome.scripting.InjectionResult;
    chromeScriptingExecuteScriptMock.mockResolvedValue([scriptResult, scriptResult]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(SyntaxError);
  });
  
  it('Returns error when the script result\'s result property is incorrect object', async () => {
    const activeTab: chrome.tabs.Tab = {
      id: 7
    } as any;
    chromeTabsQueryMock.mockResolvedValue([activeTab]);
    const scriptResult = {
      result: {
        foo: 'bar'
      }
    } as chrome.scripting.InjectionResult;
    chromeScriptingExecuteScriptMock.mockResolvedValue([scriptResult, scriptResult]);
  
    await expect(ActiveTabScriptExecutor.fetchRoll20ChatDOM).rejects.toThrow(SyntaxError);
  });
});
