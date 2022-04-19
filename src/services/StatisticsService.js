export const GroupRollsByAlias = (rollData, aliasMap) => {
  const groupedRolls = {};
  rollData.d20Rolls.forEach((roll) => {
    const playerKey = aliasMap ? aliasMap[roll.roller] : roll.roller;
    
    if (!groupedRolls[playerKey]) {
      groupedRolls[playerKey] = { d20: [] };
    }

    groupedRolls[playerKey].d20.push(roll.result);
  });

  return groupedRolls;
};

export const CalculateStatistics = (rollData) => {
  let playerStatisticsArray = [];
  for (const playerName of Object.keys(rollData)) {
    const playerRollData = rollData[playerName];

    const playerStatistics = {
      playerName: playerName,
      statisticTypes: []
    };

    if (playerRollData.d20) {
      const d20Stats = calculateD20Satistics(playerRollData.d20);
      playerStatistics.statisticTypes = [
        ...playerStatistics.statisticTypes,
        {
          rollCount: playerRollData.d20.length,
          rollType: 'd20',
          statistics: d20Stats
        }
      ];
    }

    playerStatisticsArray = [
      ...playerStatisticsArray,
      playerStatistics
    ]
  }

  return playerStatisticsArray;
}

const d20StatisticNames = {
  average: 'Average',
  twentyCount: '# of 20s',
  max: 'Max',
  oneCount: '# of 1s',
  min: 'Min',
  mostCommon: 'Most Common Roll'
}

const calculateD20Satistics = (rolls) => {
  let totalSum = 0,
    max = 0,
    min = 20,
    oneCount = 0,
    twentyCount = 0,
    resultArray = [];

  for (const roll of rolls) {
    const rollValue = parseInt(roll, 10);
    resultArray.push(rollValue);

    totalSum += rollValue;

    if (rollValue > max) {
      max = rollValue;
    }

    if (rollValue < min) {
      min = rollValue;
    }

    if (rollValue === 1) {
      oneCount++;
    }

    if (rollValue === 20) {
      twentyCount++;
    }
  }

  const average = totalSum / rolls.length;
  const mostCommon = mostFrequentValue(resultArray);
  
  const statistics = {};
  
  if (9 < average && average > 11) {
    //average is worth noting
    statistics.average = { name: d20StatisticNames.average, value: average };
  }
  
  statistics.twentyCount = { name: d20StatisticNames.twentyCount, value: twentyCount };
  if (twentyCount === 0) {
    //is max worth noting?
    statistics.max = { name: d20StatisticNames.max, value: max };
  }
  
  statistics.oneCount = { name: d20StatisticNames.oneCount, value: oneCount };
  if (oneCount === 0) {
    //is min worth noting?
    statistics.min = { name: d20StatisticNames.min, value: min };
  }
  
  statistics.mostCommon = {
    name: d20StatisticNames.mostCommon,
    value: mostCommon.value,
    tooltipText: `${mostCommon.count} times or ${simplePercent(mostCommon.count, rolls.length)}%`
  };

  return statistics;
}

const simplePercent = (x, y) => {
  return Math.floor((x / y) * 100);
}

const mostFrequentValue = (array) => {
  const uniques = {};

  for (let i = 0; i < array.length; i++) {
    uniques[array[i]] = (uniques[array[i]] || 0) + 1;
  }

  const max = {
    value: array[0],
    count: 1
  };
  for (const u in uniques) {
    if (max.count < uniques[u]) {
      max.value = u;
      max.count = uniques[u];
    }
  }

  return max;
}