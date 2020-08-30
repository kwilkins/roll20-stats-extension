var response = {
  type: 'ROLL20_STATS_EXTENSION'
};

console.log('Running parser...');

if ($('#textchat > .content').length) {
  // if we find a roll20 chat, gather data
  var lastMessageBy = '';
  var parsedRoll20Data = {
    playerNames: [],
    d20Rolls: [],
    // only d20 scores for now...
    // damage rolls?
    // 2d6?
  };
  
  var processMessage = (index, element) => {
    // function that processes every message in roll20 chat
    const messageElement = $(element);
    console.log('processing message...', element);
    let storePlayer = false;

    if (messageElement.children('.by').length) {
      // if this message has a player name associated with it, we keep it
      // for repeat messages
      lastMessageBy = messageElement.children('.by').text().replace(':', '');
    }

    if (messageElement.hasClass('rollresult')) {
      // This message is a standard roll20 dice roll
      messageElement.find('.diceroll.d20').each((index, element) => {
        const rollResult = $(element).find('.didroll').text();

        parsedRoll20Data.d20Rolls = [...parsedRoll20Data.d20Rolls, { roller: lastMessageBy, result: rollResult }];
        storePlayer = true;
      });
    }

    if (messageElement.find('div[class^=\'sheet-rolltemplate\']').length > 0) {
      // This message contains a templated roll from a Roll20 character sheet.
      // For whatever reason the templated rolls use an html element attribute
      // named "original-title" which is NOT a valid attribute name, jquery
      // separates this into two attributes which is why we are searching for
      // an attribute named "title" instead.
      messageElement.find('span.inlinerollresult').each((index, element) => {
        const rollElement = $(element);

        const inlineRoll = rollElement.attr('title') ? rollElement.attr('title') : rollElement.attr('original-title');
        const rollResult = $('<div/>').html(inlineRoll).find('.basicdiceroll').text();

        console.log('inlineRoll: ', inlineRoll);
        if (inlineRoll.indexOf('Rolling 1d20') > -1) {
          parsedRoll20Data.d20Rolls = [...parsedRoll20Data.d20Rolls, { roller: lastMessageBy, result: rollResult }];
          storePlayer = true;
        }
      });
    }

    if (storePlayer && !parsedRoll20Data.playerNames.find((element) => element === lastMessageBy)) {
      // if we recorded a roll for this player, and they are not already in our data, add it to playerNames
      parsedRoll20Data.playerNames = [...parsedRoll20Data.playerNames, lastMessageBy];
    }
  }

  $('#textchat > .content').children('.message').each(processMessage);

  if (parsedRoll20Data.playerNames.length) {
    response.data = parsedRoll20Data;
	} else {
    response.error = 'No player messages were found in the chat';
	}
} else {
  response.error = 'You need to be on a page with a roll20 chat in order to use this extension';
}

console.log(response);

chrome.runtime.sendMessage(response);