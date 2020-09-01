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
          rollType: 'D20',
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
  let addedTotal = 0,
    max = 0,
    min = 20,
    oneCount = 0,
    twentyCount = 0,
    resultArray = [];

  for (const roll of rolls) {
    const result = parseInt(rolls[roll], 10);
    resultArray.push(result);

    addedTotal += result;

    if (result > max) {
      max = result;
    }

    if (result < min) {
      min = result;
    }

    if (result === 1) {
      oneCount++;
    }

    if (result === 20) {
      twentyCount++;
    }
  }

  const average = addedTotal / rolls.length;

  const mostCommon = mostFrequentValue(resultArray);

  const result = {};

  if (9 < average && average > 11) {
    //average is worth noting
    result.average = { name: d20StatisticNames.average, value: average };
  }

  result.twentyCount = { name: d20StatisticNames.twentyCount, value: twentyCount };
  if (twentyCount === 0) {
    //is max worth noting?
    result.max = { name: d20StatisticNames.max, value: max };
  }

  result.oneCount = { name: d20StatisticNames.oneCount, value: oneCount };
  if (oneCount === 0) {
    //is min worth noting?
    result.min = { name: d20StatisticNames.min, value: min };
  }

  result.mostCommon = { name: d20StatisticNames.mostCommon, value: mostCommon };

  return result;
}

const mostFrequentValue = (array) => {
  var uniqs = {};

  for (var i = 0; i < array.length; i++) {
    uniqs[array[i]] = (uniqs[array[i]] || 0) + 1;
  }

  var max = { val: array[0], count: 1 };
  for (var u in uniqs) {
    if (max.count < uniqs[u]) { max = { val: u, count: uniqs[u] }; }
  }

  return max.val;
}