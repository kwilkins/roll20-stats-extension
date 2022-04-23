import * as StatisticsService from '../StatisticsService';
import { DiceRollType } from '../../model/DiceRollInterfaces';
import { IDiceRollerStatistics } from '../../model/StatisticsInterfaces';

const testRollerNameDM = 'DM (Kevin) (GM)';
const testRollerNameNate = 'Nate';
const testRollerNameDorkus = 'Dorkus';
const testRollerNameEllywick = 'Ellywick \'Stumbleduck\' Timbers';
const testRollerNameTorenx = 'Torenx';

it('groups without aliases properly', () => {
  const statistics = StatisticsService.CalculateStatistics(testRoll20Data);
  expect(statistics).toHaveLength(5);

  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameDM,
    [
      {
        rollCount: 25,
        rollType: DiceRollType.d20,
        twentyCount: 1,
        oneCount: 1,
        mostCommon: 4
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameDorkus,
    [
      {
        rollCount: 45,
        rollType: DiceRollType.d20,
        twentyCount: 3,
        oneCount: 3,
        mostCommon: 9
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameEllywick,
    [
      {
        rollCount: 29,
        rollType: DiceRollType.d20,
        twentyCount: 2,
        oneCount: 1,
        mostCommon: 15
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameNate,
    [
      {
        rollCount: 14,
        rollType: DiceRollType.d20,
        twentyCount: 1,
        oneCount: 1,
        mostCommon: 2
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameTorenx,
    [
      {
        rollCount: 23,
        rollType: DiceRollType.d20,
        average: 11.73913043478261,
        twentyCount: 2,
        oneCount: 1,
        mostCommon: 3
      }
    ]);
});

it('groups with aliases properly', () => {
  const aliasMap = {
    [testRollerNameNate]: testRollerNameTorenx
  };

  const statistics = StatisticsService.CalculateStatistics(testRoll20Data, aliasMap);
  expect(statistics).toHaveLength(4);

  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameDM,
    [
      {
        rollCount: 25,
        rollType: DiceRollType.d20,
        twentyCount: 1,
        oneCount: 1,
        mostCommon: 4
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameDorkus,
    [
      {
        rollCount: 45,
        rollType: DiceRollType.d20,
        twentyCount: 3,
        oneCount: 3,
        mostCommon: 9
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameEllywick,
    [
      {
        rollCount: 29,
        rollType: DiceRollType.d20,
        twentyCount: 2,
        oneCount: 1,
        mostCommon: 15
      }
    ]);
  ensureStatisticsContainCorrectRecord(
    statistics,
    testRollerNameTorenx,
    [
      {
        rollCount: 37,
        rollType: DiceRollType.d20,
        average: 11.45945945945946,
        twentyCount: 3,
        oneCount: 2,
        mostCommon: 18
      }
    ]);
});

const ensureStatisticsContainCorrectRecord = (
  statistics: IDiceRollerStatistics[],
  expectedRollerName: string,
  expectedRollStatistics: { rollCount: Number, rollType: DiceRollType, average?: Number, twentyCount: Number, max?: Number, oneCount: Number, min?: Number, mostCommon: Number }[]
) => {
  const rollerNameResults = statistics.filter((s) => s.rollerName === expectedRollerName);
  expect(rollerNameResults).toHaveLength(1);
  const rollerStatistics = rollerNameResults[0];

  for (let i = 0; i < expectedRollStatistics.length; i++) {
    const expected = expectedRollStatistics[0];
    const actual = rollerStatistics.diceRollStatistics[0];

    expect(actual.rollCount).toBe(expected.rollCount);
    expect(actual.rollType).toBe(expected.rollType);

    expect(actual.statisticData.twentyCount.value).toBe(expected.twentyCount);
    expect(actual.statisticData.oneCount.value).toBe(expected.oneCount);
    expect(actual.statisticData.mostCommon.value).toBe(expected.mostCommon);

    if (expected.average) {
      expect(actual.statisticData.average.value).toBe(expected.average);
    } else {
      expect(actual.statisticData.average.shouldDisplay).toBe(false);
    }

    if (expected.max) {
      expect(actual.statisticData.max.value).toBe(expected.max);
    } else {
      expect(actual.statisticData.max.shouldDisplay).toBe(false);
    }

    if (expected.min) {
      expect(actual.statisticData.min.value).toBe(expected.min);
    } else {
      expect(actual.statisticData.min.shouldDisplay).toBe(false);
    }
  }
};

const testRoll20Data = {
  d20Rolls: [
    { rollerName: testRollerNameDM, result: "4" },
    { rollerName: testRollerNameNate, result: "12" },
    { rollerName: testRollerNameNate, result: "15" },
    { rollerName: testRollerNameNate, result: "14" },
    { rollerName: testRollerNameNate, result: "7" },
    { rollerName: testRollerNameNate, result: "8" },
    { rollerName: testRollerNameNate, result: "2" },
    { rollerName: testRollerNameDorkus, result: "20" },
    { rollerName: testRollerNameDorkus, result: "19" },
    { rollerName: testRollerNameNate, result: "2" },
    { rollerName: testRollerNameNate, result: "11" },
    { rollerName: testRollerNameNate, result: "18" },
    { rollerName: testRollerNameNate, result: "14" },
    { rollerName: testRollerNameDorkus, result: "12" },
    { rollerName: testRollerNameDorkus, result: "16" },
    { rollerName: testRollerNameNate, result: "1" },
    { rollerName: testRollerNameNate, result: "18" },
    { rollerName: testRollerNameEllywick, result: "14" },
    { rollerName: testRollerNameEllywick, result: "15" },
    { rollerName: testRollerNameEllywick, result: "15" },
    { rollerName: testRollerNameEllywick, result: "8" },
    { rollerName: testRollerNameEllywick, result: "14" },
    { rollerName: testRollerNameEllywick, result: "18" },
    { rollerName: testRollerNameNate, result: "12" },
    { rollerName: testRollerNameNate, result: "20" },
    { rollerName: testRollerNameEllywick, result: "15" },
    { rollerName: testRollerNameEllywick, result: "9" },
    { rollerName: testRollerNameDorkus, result: "11" },
    { rollerName: testRollerNameDorkus, result: "4" },
    { rollerName: testRollerNameEllywick, result: "12" },
    { rollerName: testRollerNameEllywick, result: "9" },
    { rollerName: testRollerNameDM, result: "10" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "4" },
    { rollerName: testRollerNameDorkus, result: "7" },
    { rollerName: testRollerNameEllywick, result: "1" },
    { rollerName: testRollerNameTorenx, result: "12" },
    { rollerName: testRollerNameDM, result: "18" },
    { rollerName: testRollerNameTorenx, result: "18" },
    { rollerName: testRollerNameTorenx, result: "9" },
    { rollerName: testRollerNameDorkus, result: "12" },
    { rollerName: testRollerNameDorkus, result: "20" },
    { rollerName: testRollerNameDorkus, result: "14" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "17" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "17" },
    { rollerName: testRollerNameDorkus, result: "14" },
    { rollerName: testRollerNameTorenx, result: "20" },
    { rollerName: testRollerNameTorenx, result: "3" },
    { rollerName: testRollerNameEllywick, result: "13" },
    { rollerName: testRollerNameTorenx, result: "13" },
    { rollerName: testRollerNameDorkus, result: "10" },
    { rollerName: testRollerNameDM, result: "7" },
    { rollerName: testRollerNameDM, result: "16" },
    { rollerName: testRollerNameDM, result: "9" },
    { rollerName: testRollerNameDM, result: "3" },
    { rollerName: testRollerNameDM, result: "12" },
    { rollerName: testRollerNameDM, result: "10" },
    { rollerName: testRollerNameEllywick, result: "8" },
    { rollerName: testRollerNameEllywick, result: "5" },
    { rollerName: testRollerNameDorkus, result: "10" },
    { rollerName: testRollerNameDorkus, result: "20" },
    { rollerName: testRollerNameDM, result: "18" },
    { rollerName: testRollerNameDM, result: "7" },
    { rollerName: testRollerNameEllywick, result: "2" },
    { rollerName: testRollerNameEllywick, result: "20" },
    { rollerName: testRollerNameTorenx, result: "12" },
    { rollerName: testRollerNameTorenx, result: "18" },
    { rollerName: testRollerNameDorkus, result: "1" },
    { rollerName: testRollerNameDorkus, result: "18" },
    { rollerName: testRollerNameDM, result: "14" },
    { rollerName: testRollerNameDM, result: "14" },
    { rollerName: testRollerNameDM, result: "11" },
    { rollerName: testRollerNameEllywick, result: "14" },
    { rollerName: testRollerNameEllywick, result: "16" },
    { rollerName: testRollerNameTorenx, result: "2" },
    { rollerName: testRollerNameTorenx, result: "3" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "6" },
    { rollerName: testRollerNameDM, result: "4" },
    { rollerName: testRollerNameDM, result: "4" },
    { rollerName: testRollerNameDM, result: "4" },
    { rollerName: testRollerNameEllywick, result: "11" },
    { rollerName: testRollerNameEllywick, result: "5" },
    { rollerName: testRollerNameTorenx, result: "4" },
    { rollerName: testRollerNameTorenx, result: "19" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "4" },
    { rollerName: testRollerNameDM, result: "15" },
    { rollerName: testRollerNameDM, result: "2" },
    { rollerName: testRollerNameEllywick, result: "15" },
    { rollerName: testRollerNameEllywick, result: "6" },
    { rollerName: testRollerNameTorenx, result: "8" },
    { rollerName: testRollerNameTorenx, result: "15" },
    { rollerName: testRollerNameDorkus, result: "15" },
    { rollerName: testRollerNameDorkus, result: "13" },
    { rollerName: testRollerNameDM, result: "20" },
    { rollerName: testRollerNameTorenx, result: "20" },
    { rollerName: testRollerNameTorenx, result: "1" },
    { rollerName: testRollerNameDorkus, result: "10" },
    { rollerName: testRollerNameDorkus, result: "5" },
    { rollerName: testRollerNameDorkus, result: "10" },
    { rollerName: testRollerNameDorkus, result: "9" },
    { rollerName: testRollerNameDorkus, result: "19" },
    { rollerName: testRollerNameDorkus, result: "6" },
    { rollerName: testRollerNameDM, result: "10" },
    { rollerName: testRollerNameDorkus, result: "3" },
    { rollerName: testRollerNameDorkus, result: "8" },
    { rollerName: testRollerNameTorenx, result: "8" },
    { rollerName: testRollerNameEllywick, result: "2" },
    { rollerName: testRollerNameDorkus, result: "16" },
    { rollerName: testRollerNameDM, result: "1" },
    { rollerName: testRollerNameDM, result: "5" },
    { rollerName: testRollerNameDorkus, result: "8" },
    { rollerName: testRollerNameDorkus, result: "1" },
    { rollerName: testRollerNameTorenx, result: "3" },
    { rollerName: testRollerNameTorenx, result: "14" },
    { rollerName: testRollerNameDM, result: "4" },
    { rollerName: testRollerNameDM, result: "8" },
    { rollerName: testRollerNameDorkus, result: "12" },
    { rollerName: testRollerNameDorkus, result: "12" },
    { rollerName: testRollerNameTorenx, result: "18" },
    { rollerName: testRollerNameTorenx, result: "19" },
    { rollerName: testRollerNameEllywick, result: "6" },
    { rollerName: testRollerNameEllywick, result: "2" },
    { rollerName: testRollerNameEllywick, result: "16" },
    { rollerName: testRollerNameEllywick, result: "4" },
    { rollerName: testRollerNameDorkus, result: "6" },
    { rollerName: testRollerNameDorkus, result: "1" },
    { rollerName: testRollerNameTorenx, result: "16" },
    { rollerName: testRollerNameTorenx, result: "15" },
    { rollerName: testRollerNameEllywick, result: "20" },
    { rollerName: testRollerNameEllywick, result: "16" },
    { rollerName: testRollerNameDorkus, result: "6" },
    { rollerName: testRollerNameDorkus, result: "8" },
  ],
  rollerNames: [
    testRollerNameDM,
    testRollerNameNate,
    testRollerNameDorkus,
    testRollerNameEllywick,
    testRollerNameTorenx
  ]
};