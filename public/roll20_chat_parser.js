var response = {
  type: 'ROLL20_STATS_EXTENSION'
};

var parseStandardRoll = (rollElement) => {
  return $(rollElement).find('.didroll').text()
}

var parseInlineD20Roll = (rollElement) => {
  // For whatever reason the inline rolls use an html element attribute
  // named "original-title" which is NOT a valid attribute name, jquery
  // separates this into two attributes which is why we also search for
  // an attribute named "title".
  rollElement = $(rollElement);
  const inlineRoll = rollElement.attr('title') ? rollElement.attr('title') : rollElement.attr('original-title');
  const rollResult = $('<div />').html(inlineRoll).find('.basicdiceroll').text();

  if (inlineRoll.includes('Rolling 1d20')) {
    return rollResult;
  }

  return '';
}

var addRollResult = (playerName, rollType, rollResult) => {
  if (rollResult) {
    parsedRoll20Data[rollType] = [
      ...parsedRoll20Data.d20Rolls,
      {
        roller: playerName,
        result: rollResult
      }
    ];
    parsedRoll20Data.playerNames = [
      ...parsedRoll20Data.playerNames,
      playerName
    ]
  }
}

var addD20RollResult = (playerName, rollResult) => {
  addRollResult(playerName, 'd20Rolls', rollResult)
}

var processMessage = (index, element) => {
  // function that processes every message in roll20 chat
  const messageElement = $(element);

  if (messageElement.children('.by').length) {
    // if this message has a player name associated with it, we keep it
    // for repeat messages
    const messageSenderText = messageElement.children('.by').text();
    lastMessageBy = messageSenderText.substring(0, messageSenderText.lastIndexOf(':')).trim();
  }

  if (messageElement.hasClass('rollresult')) {
    // This message is a standard roll20 d20 dice roll
    const standardD20RollSelector = messageElement.find('.diceroll.d20');
    if (standardD20RollSelector.length) {
      standardD20RollSelector.each((index, element) => {
        const rollResult = parseStandardRoll(element);
        addD20RollResult(lastMessageBy, rollResult);
      });
    }
  }
  
  if (messageElement.find('div[class^=\'sheet-rolltemplate\']').length > 0) {
    // This message contains a templated roll from a Roll20 character sheet.
    const inlineRollSelector = messageElement.find('span.inlinerollresult');
    if (inlineRollSelector.length) {
      inlineRollSelector.each((index, element) => {
        const rollResult = parseInlineD20Roll(element);
        addD20RollResult(lastMessageBy, rollResult);
      });
    }
  }
}

console.log('starting roll20_chat_parser...');

if (window.location.host === 'app.roll20.net' && $('#textchat > .content').length) {
  // if we find a roll20 chat, gather data
  var lastMessageBy = '';
  var parsedRoll20Data = {
    playerNames: [],
    d20Rolls: [],
    // only d20 scores for now...
    // damage rolls?
    // 2d6?
  };

  $('#textchat > .content').children('.message').each(processMessage);

  parsedRoll20Data.playerNames = [...new Set(parsedRoll20Data.playerNames)];

  if (parsedRoll20Data.playerNames.length) {
    response.data = parsedRoll20Data;
  } else {
    response.error = 'No player messages were found in the chat';
  }
} else {
  response.error = 'Tab needs to contain a roll20 chat log in order to use this extension.';
}

console.log('finished parsing results', response);

// Last statement evaluated is returned as script result.
response;