var jsonData;

$(function() {
	executeStatsScript();
});

var executeStatsScript = function() {
	chrome.tabs.executeScript(null, { file: 'jquery-2.1.0.min.js' }, function() {
		chrome.tabs.executeScript(null, { file: 'content_script.js' });
	});
};

//Wait for the Result
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var parsedRequest = $.parseJSON(request);
		if (!parsedRequest.error) {
			jsonData = parsedRequest;
			displayParsedResults(jsonData);
			//displayStats();
		} else {
			$('#main').append(parsedRequest.error);
		}
});

function displayParsedResults(parsedRoll20Data) {
	$('#parsedResults').append('<div>Found rolls for '+parsedRoll20Data.playerNames.length+' players.</div>');
	parsedRoll20Data.playerNames.forEach((element, index) => {
		$('#parsedResults').append('<div><input id="alias-'+index+'" placeholder="'+element+'"/> '+element+'</div>');
	});
	$('#parsedResults').append('<button id="calculateStats">Calculate Stats!</button>');
	$('#calculateStats').click(function() {
		$('#playerList').empty();
		const aliasInputs = $.find('input[id^=\'alias-\']');
		// construct alias map from inputs
		const aliasMap = {};
		parsedRoll20Data.playerNames.forEach((element, index) => {
			aliasMap[element] = $(aliasInputs[index]).val();
		});
		console.log(aliasMap);
		groupedRoll20Data = groupRolls(parsedRoll20Data, aliasMap);
		console.log(groupedRoll20Data);
		calculateStats(groupedRoll20Data);
	});
}

function groupRolls(parsedRoll20Data, aliasMap) {
	const groupedRolls = {};
	parsedRoll20Data.d20Rolls.forEach(element => {
		const playerKey = aliasMap[element.roller] || element.roller;
		if(!groupedRolls[playerKey]) {
			groupedRolls[playerKey] = {d20: []};
		}
		groupedRolls[playerKey].d20.push(element.result);
	});
	return groupedRolls;
}

function calculateStats(statData) {
	Object.keys(statData).forEach(function(playerName) {
		playerElement = $('<div class="player">').append(
			'<div class="name">'
			+playerName
			+'</div>');
		if (statData[playerName].d20) {
			stats = calculateD20Stats(statData[playerName].d20);
			statsContainer = $('<div class="stats">');
			for (stat in stats) {
				statsContainer.append(
					$('<div class="stat">'
					+makeLabel(statText[stat])
					+'<span class="number">'
					+stats[stat].toString()
					+'</span></div>'));
			}
			$('#playerList').append(playerElement.append(
				$('<div class="total">'
				+statData[playerName].d20.length
				+' d20 rolls</div>'))
				.append(statsContainer));
		}
	});
}

var statText = {
	average: 'Average',
	twentyCount: '# of 20s',
	max: 'Max',
	oneCount: '# of 1s',
	min: 'Min',
	mostCommon: 'Most Common Roll'
}

function makeLabel(string) {
	return string+': '
}

function calculateD20Stats(rolls) {
	addedTotal = 0,
	max = 0,
	min = 20,
	oneCount = 0,
	twentyCount = 0,
	resultArray = [];
	
	for(roll in rolls) {
		result = parseInt(rolls[roll], 10);
		resultArray.push(result);
		
		addedTotal += result;
		
		if (result > max) {
			max = result;
		}
		
		if (result < min) {
			min = result;
		}
		
		if (result == 1) {
			oneCount++;
		}
		
		if (result == 20) {
			twentyCount++;
		}
	}
	
	average = addedTotal/rolls.length;
	
	mostCommon = mostFrequentValue(resultArray);
	
	var result = {};
	
	if (9 < average && average > 11) {
		//average is worth noting
		result.average = average;
	}
	
	result.twentyCount = twentyCount;
	if (twentyCount == 0) {
		//is max worth noting?
		result.max = max;
	}
	
	result.oneCount = oneCount;
	if (oneCount == 0) {
		//is min worth noting?
		result.min = min;
	}
	
	result.mostCommon = mostCommon;
	
	return result;
}

function mostFrequentValue(array) {
	var uniqs = {};

    for(var i = 0; i < array.length; i++) {
        uniqs[array[i]] = (uniqs[array[i]] || 0) + 1;
    }

    var max = { val: array[0], count: 1 };
    for(var u in uniqs) {
        if(max.count < uniqs[u]) { max = { val: u, count: uniqs[u] }; }
    }

    return max.val;
}
	
function groupDataByName(data) {
	var aAfBAliases = [
		{ name: 'Travis-grouped', aliases: ['Travis', 'DM'] },
		{ name: 'Josh-grouped', aliases: ['Auron', 'Nina'] },
		{ name: 'Allison-grouped', aliases: ['Faun', 'Faunalyn', 'Buck', 'Amareth'] },
		{ name: 'Faun-femaleOnly', aliases: ['Faun', 'Faunalyn'] },
		{ name: 'Faun&Buck', aliases: ['Faun', 'Faunalyn', 'Buck'] },
	];

	var groupedPlayers = data.players.concat(aAfBAliases.map(function(a) {return a.name}));

	var groupedRollData = data.rollData;
	for (playerGrouping of aAfBAliases) {
		var groupedPlayerRollData = { d20: [] };
		for (alias of playerGrouping.aliases) {
			if(data.rollData[alias].d20) {
				groupedPlayerRollData.d20 = groupedPlayerRollData.d20.concat(data.rollData[alias].d20);
			}
		}
		groupedRollData[playerGrouping.name] = groupedPlayerRollData;
	}

	return {
		players: groupedPlayers,
		rollData: groupedRollData,
	};
}

function displayStats() {
	statData = jsonData;//groupDataByName(jsonData);
	statData.players.forEach(function(playerName) {
		playerElement = $('<div class="player">').append(
			'<div class="name">'
			+playerName
			+'</div>');
		if (statData.rollData[playerName].d20) {
			stats = calculateD20Stats(statData.rollData[playerName].d20);
			statsContainer = $('<div class="stats">');
			for (stat in stats) {
				statsContainer.append(
					$('<div class="stat">'
					+makeLabel(statText[stat])
					+'<span class="number">'
					+stats[stat].toString()
					+'</span></div>'));
			}
			$('#playerList').append(playerElement.append(
				$('<div class="total">'
				+statData.rollData[playerName].d20.length
				+' d20 rolls</div>'))//.click(function() {showPlayerGraph(playerName, playerIndex, 'd20');}))
				.append(statsContainer));
		}
	});
}

var showPlayerGraph = function(playerName, playerIndex, dieType) {
	console.log('attempting to show graph for player '+playerIndex);
	$('div.name:contains(\''+playerName+'\')').siblings('.stats').toggle();
	playerRolls = jsonData.rollData[playerIndex][dieType];
	
}