chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(
    {
      file: 'jquery-2.1.0.min.js'
    }, () => {
      chrome.tabs.executeScript(
        {
          file: 'roll20_chat_parser.js'
        }
      );
    });
});