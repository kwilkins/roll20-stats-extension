if ($('#textchat .content').length) {
	// if we find a roll20 chat, gather data
	let lastMessageBy = '';
	const parsedRoll20Data = {
		playerNames: [],
		d20Rolls: [],
		// only d20 scores for now...
		// damage rolls?
		// 2d6?
	};

	function processMessage() {
		// function that processes every message in roll20 chat
		const message = $(this);
		let storePlayer = false;

		if (message.children('.by').length) {
			// if this message has a player name associated with it, we keep it
			// for repeat messages
			lastMessageBy = message.children('.by').text().replace(':', '');
		}
		
		if (message.hasClass('rollresult')) {
			// This message is a standard roll20 dice roll
			message.find('.diceroll.d20').each(
				function() {
					const rollResult = $(this).find('.didroll').text();
					if(rollResult === '') {
						debugger;
					}
					parsedRoll20Data.d20Rolls.push({ roller: lastMessageBy, result: rollResult });
					storePlayer = true;
			});
		}

		if (message.find('div[class^=\'sheet-rolltemplate\']').length > 0) {
			// This message contains a templated roll from a Roll20 character sheet.
			// For whatever reason the templated rolls use an html element attribute
			// named "original-title" which is NOT a valid attribute name, jquery
			// separates this into two attributes which is why we are searching for
			// an attribute named "title" instead.
			message.find('span.inlinerollresult[title^=\'Rolling 1d20\']').each(
				function() {
					const rollResult = $('<div/>').html($(this).attr('title')).find('.basicdiceroll').text();
					parsedRoll20Data.d20Rolls.push({ roller: lastMessageBy, result: rollResult });
					storePlayer = true;
			});
		}

		if (storePlayer && !parsedRoll20Data.playerNames.find(function(element) {return element === lastMessageBy})) {
			// if we recorded a roll for this player, and they are not already in our data, add it to playerNames
			parsedRoll20Data.playerNames.push(lastMessageBy);
		}
	}

	$('#textchat > .content').children('.message').each(processMessage);
	
	if (!parsedRoll20Data.playerNames.length) {
		chrome.runtime.sendMessage('{"error": "There are no player messages in the chat"}');
	} else {
		chrome.runtime.sendMessage(JSON.stringify(parsedRoll20Data));
	}
} else {
	chrome.runtime.sendMessage('{"error": "You need to be on a page with a roll20 chat in order to use this extension"}');
}