import { DiceRollD20Name, DiceRollType, IRollData, IRollResults } from '../model/DiceRollInterfaces';
import { d20StatisticDisplayNames, IDiceRollerStatistics, IStatistic, IUserStatisticData } from '../model/StatisticsInterfaces';

/**
 * @summary Calculates dice roll statistics from a game log.
 * @param rollData Roll data from a game log.
 * @param aliasMap Optional map of roller alias to combine roll data before calculating stats.
 * @returns An array of dice roller statistics.
 */
export const CalculateStatistics = (
  rollData: IRollData,
  aliasMap?: Record<string, string>
): IDiceRollerStatistics[] => {
  const groupedRolls = GroupRollsByAlias(rollData, aliasMap);
  return CalculateStatisticsFromGroupedRolls(groupedRolls);
};

const GroupRollsByAlias = (
  rollData: IRollData,
  aliasMap?: Record<string, string>
): Record<string, IRollResults> => {
  const groupedRolls: Record<string, IRollResults> = {};

  rollData.d20Rolls.forEach((roll) => {
    const rollerName = (aliasMap && aliasMap[roll.rollerName]) ?? roll.rollerName;

    if (!groupedRolls[rollerName]) {
      groupedRolls[rollerName] = { d20: [] };
    }

    groupedRolls[rollerName].d20.push(roll.result);
  });

  return groupedRolls;
};

const CalculateStatisticsFromGroupedRolls = (
  rollData: Record<string, IRollResults>
): IDiceRollerStatistics[] => {
  let playerStatisticsArray: IDiceRollerStatistics[] = [];

  for (const rollerName of Object.keys(rollData)) {
    const playerRollData = rollData[rollerName];

    const playerStatistics: IDiceRollerStatistics = {
      rollerName: rollerName,
      diceRollStatistics: []
    };

    if (playerRollData.d20) {
      const d20Stats = calculateD20Satistics(playerRollData.d20);
      playerStatistics.diceRollStatistics = [
        ...playerStatistics.diceRollStatistics,
        {
          rollCount: playerRollData.d20.length,
          rollType: DiceRollD20Name,
          statisticData: d20Stats
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

const calculateD20Satistics = (rollResults: string[]): IUserStatisticData => {
  let totalSum = 0,
    max = 0,
    min = 20,
    oneCount = 0,
    twentyCount = 0,
    resultArray: number[] = [];

  for (const rollResult of rollResults) {
    const rollValue = +rollResult;
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

  const average = totalSum / rollResults.length;
  const [mostCommonValue, mostCommonValueCount] = mostFrequentValue(resultArray);

  const averageStat: IStatistic = {
    name: d20StatisticDisplayNames.average,
    value: average,
    shouldDisplay: 9 < average && average > 11
  };

  const twentyCountStat: IStatistic = {
    name: d20StatisticDisplayNames.twentyCount,
    value: twentyCount,
    shouldDisplay: true
  }

  const maxStat: IStatistic = {
    name: d20StatisticDisplayNames.max,
    value: max,
    shouldDisplay: max !== 20
  }

  const oneCountStat: IStatistic = {
    name: d20StatisticDisplayNames.oneCount,
    value: oneCount,
    shouldDisplay: true
  }

  const minStat: IStatistic = {
    name: d20StatisticDisplayNames.min,
    value: min,
    shouldDisplay: min !== 1
  }

  const mostCommonStat: IStatistic = {
    name: d20StatisticDisplayNames.mostCommon,
    value: mostCommonValue,
    tooltipText: `${simplePercent(mostCommonValueCount, rollResults.length)}% or ${mostCommonValueCount} times`,
    shouldDisplay: true
  };

  return {
    average: averageStat,
    twentyCount: twentyCountStat,
    max: maxStat,
    oneCount: oneCountStat,
    min: minStat,
    mostCommon: mostCommonStat
  };
}

const simplePercent = (x: number, y: number): number => {
  return Math.floor((x / y) * 100);
}

const mostFrequentValue = (array: number[]): [number, number] => {
  const uniqueValueCounts: Record<number, number> = {};

  for (let i = 0; i < array.length; i++) {
    uniqueValueCounts[array[i]] = (uniqueValueCounts[array[i]] || 0) + 1;
  }

  let mostFrequentValue: number = array[0],
    count: number = 1;

  for (const key in uniqueValueCounts) {
    if (count < uniqueValueCounts[key]) {
      mostFrequentValue = +key;
      count = uniqueValueCounts[key];
    }
  }

  return [mostFrequentValue, count];
}