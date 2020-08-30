const response = {
  type: 'ROLL20_STATS_EXTENSION'
};

console.log('Running parser...');

if ($('#textchat .content').length) {
  response.data = 'Roll20 chat was found!';
} else {
	response.error = 'You need to be on a page with a roll20 chat in order to use this extension';
}

console.log(response);

chrome.runtime.sendMessage(response);