import { DiceRollType, IRollData, IRollResult } from '../model/DiceRollInterfaces';
import { d20StatisticDisplayNames, IDiceRollerStatistics, IStatistic, IUserStatisticData } from '../model/StatisticsInterfaces';

export const GroupRollsByAlias = (
  rollData: IRollData,
  aliasMap?: Record<string, string>
): Record<string, IRollResult> => {
  const groupedRolls: Record<string, IRollResult> = {};
  rollData.d20Rolls.forEach((roll) => {
    const playerKey = (aliasMap && aliasMap[roll.roller]) ?? roll.roller;

    if (!groupedRolls[playerKey]) {
      groupedRolls[playerKey] = { d20: [] };
    }

    groupedRolls[playerKey].d20.push(roll.result);
  });

  return groupedRolls;
};

export const CalculateStatistics = (
  rollData: Record<string, IRollResult>
): IDiceRollerStatistics[] => {
  let playerStatisticsArray: IDiceRollerStatistics[] = [];
  for (const playerName of Object.keys(rollData)) {
    const playerRollData = rollData[playerName];

    const playerStatistics: IDiceRollerStatistics = {
      rollerName: playerName,
      diceRollStatistics: []
    };

    if (playerRollData.d20) {
      const d20Stats = calculateD20Satistics(playerRollData.d20);
      playerStatistics.diceRollStatistics = [
        ...playerStatistics.diceRollStatistics,
        {
          rollCount: playerRollData.d20.length,
          rollType: DiceRollType.d20,
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

const calculateD20Satistics = (rolls: string[]): IUserStatisticData => {
  let totalSum = 0,
    max = 0,
    min = 20,
    oneCount = 0,
    twentyCount = 0,
    resultArray: number[] = [];

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
    tooltipText: `${simplePercent(mostCommonValueCount, rolls.length)}% or ${mostCommonValueCount} times`,
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
  const uniques: Record<number, number> = {};

  for (let i = 0; i < array.length; i++) {
    uniques[array[i]] = (uniques[array[i]] || 0) + 1;
  }

  let value: number = array[0],
    count: number = 1;

  for (const u in uniques) {
    if (count < uniques[u]) {
      value = parseInt(u, 10);
      count = uniques[u];
    }
  }

  return [value, count];
}