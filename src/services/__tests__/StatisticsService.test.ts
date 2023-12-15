import * as StatisticsService from '../StatisticsService';
import { DiceRollD20Name, DiceRollType } from '../../model/DiceRollInterfaces';
import { IDiceRollerStatistics } from '../../model/StatisticsInterfaces';
import { Roller } from '../../model/Roller';
import { TestRollerNames } from '../../TestData';

describe('StatisticsService', () => {
  it('calculates stats without aliases properly', () => {
    const statistics = StatisticsService.CalculateStatistics(testRoll20Data);
  
    expect(statistics).toHaveLength(5);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.DungeonMaster,
      [
        {
          rollCount: 25,
          rollType: DiceRollD20Name,
          twentyCount: 1,
          oneCount: 1,
          mostCommon: 4
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Dorkus,
      [
        {
          rollCount: 45,
          rollType: DiceRollD20Name,
          twentyCount: 3,
          oneCount: 3,
          mostCommon: 9
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Ellywick,
      [
        {
          rollCount: 29,
          rollType: DiceRollD20Name,
          twentyCount: 2,
          oneCount: 1,
          mostCommon: 15
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Nate,
      [
        {
          rollCount: 14,
          rollType: DiceRollD20Name,
          twentyCount: 1,
          oneCount: 1,
          mostCommon: 2
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Torenx,
      [
        {
          rollCount: 23,
          rollType: DiceRollD20Name,
          average: 11.73913043478261,
          twentyCount: 2,
          oneCount: 1,
          mostCommon: 3
        }
      ]);
  });
  
  it('calculates stats with redundent aliases properly', () => {
    const rollerPersonas: Roller[] = [
      {
        name: TestRollerNames.DungeonMaster,
        aliases: []
      },
      {
        name: TestRollerNames.Nate,
        aliases: []
      },
      {
        name: TestRollerNames.Dorkus,
        aliases: []
      },
      {
        name: TestRollerNames.Ellywick,
        aliases: []
      },
      {
        name: TestRollerNames.Torenx,
        aliases: []
      }
    ];
  
    const statistics = StatisticsService.CalculateStatistics(testRoll20Data, rollerPersonas);
  
    expect(statistics).toHaveLength(5);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.DungeonMaster,
      [
        {
          rollCount: 25,
          rollType: DiceRollD20Name,
          twentyCount: 1,
          oneCount: 1,
          mostCommon: 4
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Dorkus,
      [
        {
          rollCount: 45,
          rollType: DiceRollD20Name,
          twentyCount: 3,
          oneCount: 3,
          mostCommon: 9
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Ellywick,
      [
        {
          rollCount: 29,
          rollType: DiceRollD20Name,
          twentyCount: 2,
          oneCount: 1,
          mostCommon: 15
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Nate,
      [
        {
          rollCount: 14,
          rollType: DiceRollD20Name,
          twentyCount: 1,
          oneCount: 1,
          mostCommon: 2
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Torenx,
      [
        {
          rollCount: 23,
          rollType: DiceRollD20Name,
          average: 11.73913043478261,
          twentyCount: 2,
          oneCount: 1,
          mostCommon: 3
        }
      ]);
  });
  
  it('calculates stats with an alias properly', () => {
    const rollerPersonas: Roller[] = [
      {
        name: TestRollerNames.Torenx,
        aliases: [TestRollerNames.Nate]
      }
    ];
  
    const statistics = StatisticsService.CalculateStatistics(testRoll20Data, rollerPersonas);
  
    expect(statistics).toHaveLength(4);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.DungeonMaster,
      [
        {
          rollCount: 25,
          rollType: DiceRollD20Name,
          twentyCount: 1,
          oneCount: 1,
          mostCommon: 4
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Dorkus,
      [
        {
          rollCount: 45,
          rollType: DiceRollD20Name,
          twentyCount: 3,
          oneCount: 3,
          mostCommon: 9
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Ellywick,
      [
        {
          rollCount: 29,
          rollType: DiceRollD20Name,
          twentyCount: 2,
          oneCount: 1,
          mostCommon: 15
        }
      ]);
    ensureStatisticsContainCorrectRecord(
      statistics,
      TestRollerNames.Torenx,
      [
        {
          rollCount: 37,
          rollType: DiceRollD20Name,
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
      { rollerName: TestRollerNames.DungeonMaster, result: "4" },
      { rollerName: TestRollerNames.Nate, result: "12" },
      { rollerName: TestRollerNames.Nate, result: "15" },
      { rollerName: TestRollerNames.Nate, result: "14" },
      { rollerName: TestRollerNames.Nate, result: "7" },
      { rollerName: TestRollerNames.Nate, result: "8" },
      { rollerName: TestRollerNames.Nate, result: "2" },
      { rollerName: TestRollerNames.Dorkus, result: "20" },
      { rollerName: TestRollerNames.Dorkus, result: "19" },
      { rollerName: TestRollerNames.Nate, result: "2" },
      { rollerName: TestRollerNames.Nate, result: "11" },
      { rollerName: TestRollerNames.Nate, result: "18" },
      { rollerName: TestRollerNames.Nate, result: "14" },
      { rollerName: TestRollerNames.Dorkus, result: "12" },
      { rollerName: TestRollerNames.Dorkus, result: "16" },
      { rollerName: TestRollerNames.Nate, result: "1" },
      { rollerName: TestRollerNames.Nate, result: "18" },
      { rollerName: TestRollerNames.Ellywick, result: "14" },
      { rollerName: TestRollerNames.Ellywick, result: "15" },
      { rollerName: TestRollerNames.Ellywick, result: "15" },
      { rollerName: TestRollerNames.Ellywick, result: "8" },
      { rollerName: TestRollerNames.Ellywick, result: "14" },
      { rollerName: TestRollerNames.Ellywick, result: "18" },
      { rollerName: TestRollerNames.Nate, result: "12" },
      { rollerName: TestRollerNames.Nate, result: "20" },
      { rollerName: TestRollerNames.Ellywick, result: "15" },
      { rollerName: TestRollerNames.Ellywick, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "11" },
      { rollerName: TestRollerNames.Dorkus, result: "4" },
      { rollerName: TestRollerNames.Ellywick, result: "12" },
      { rollerName: TestRollerNames.Ellywick, result: "9" },
      { rollerName: TestRollerNames.DungeonMaster, result: "10" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "4" },
      { rollerName: TestRollerNames.Dorkus, result: "7" },
      { rollerName: TestRollerNames.Ellywick, result: "1" },
      { rollerName: TestRollerNames.Torenx, result: "12" },
      { rollerName: TestRollerNames.DungeonMaster, result: "18" },
      { rollerName: TestRollerNames.Torenx, result: "18" },
      { rollerName: TestRollerNames.Torenx, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "12" },
      { rollerName: TestRollerNames.Dorkus, result: "20" },
      { rollerName: TestRollerNames.Dorkus, result: "14" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "17" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "17" },
      { rollerName: TestRollerNames.Dorkus, result: "14" },
      { rollerName: TestRollerNames.Torenx, result: "20" },
      { rollerName: TestRollerNames.Torenx, result: "3" },
      { rollerName: TestRollerNames.Ellywick, result: "13" },
      { rollerName: TestRollerNames.Torenx, result: "13" },
      { rollerName: TestRollerNames.Dorkus, result: "10" },
      { rollerName: TestRollerNames.DungeonMaster, result: "7" },
      { rollerName: TestRollerNames.DungeonMaster, result: "16" },
      { rollerName: TestRollerNames.DungeonMaster, result: "9" },
      { rollerName: TestRollerNames.DungeonMaster, result: "3" },
      { rollerName: TestRollerNames.DungeonMaster, result: "12" },
      { rollerName: TestRollerNames.DungeonMaster, result: "10" },
      { rollerName: TestRollerNames.Ellywick, result: "8" },
      { rollerName: TestRollerNames.Ellywick, result: "5" },
      { rollerName: TestRollerNames.Dorkus, result: "10" },
      { rollerName: TestRollerNames.Dorkus, result: "20" },
      { rollerName: TestRollerNames.DungeonMaster, result: "18" },
      { rollerName: TestRollerNames.DungeonMaster, result: "7" },
      { rollerName: TestRollerNames.Ellywick, result: "2" },
      { rollerName: TestRollerNames.Ellywick, result: "20" },
      { rollerName: TestRollerNames.Torenx, result: "12" },
      { rollerName: TestRollerNames.Torenx, result: "18" },
      { rollerName: TestRollerNames.Dorkus, result: "1" },
      { rollerName: TestRollerNames.Dorkus, result: "18" },
      { rollerName: TestRollerNames.DungeonMaster, result: "14" },
      { rollerName: TestRollerNames.DungeonMaster, result: "14" },
      { rollerName: TestRollerNames.DungeonMaster, result: "11" },
      { rollerName: TestRollerNames.Ellywick, result: "14" },
      { rollerName: TestRollerNames.Ellywick, result: "16" },
      { rollerName: TestRollerNames.Torenx, result: "2" },
      { rollerName: TestRollerNames.Torenx, result: "3" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "6" },
      { rollerName: TestRollerNames.DungeonMaster, result: "4" },
      { rollerName: TestRollerNames.DungeonMaster, result: "4" },
      { rollerName: TestRollerNames.DungeonMaster, result: "4" },
      { rollerName: TestRollerNames.Ellywick, result: "11" },
      { rollerName: TestRollerNames.Ellywick, result: "5" },
      { rollerName: TestRollerNames.Torenx, result: "4" },
      { rollerName: TestRollerNames.Torenx, result: "19" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "4" },
      { rollerName: TestRollerNames.DungeonMaster, result: "15" },
      { rollerName: TestRollerNames.DungeonMaster, result: "2" },
      { rollerName: TestRollerNames.Ellywick, result: "15" },
      { rollerName: TestRollerNames.Ellywick, result: "6" },
      { rollerName: TestRollerNames.Torenx, result: "8" },
      { rollerName: TestRollerNames.Torenx, result: "15" },
      { rollerName: TestRollerNames.Dorkus, result: "15" },
      { rollerName: TestRollerNames.Dorkus, result: "13" },
      { rollerName: TestRollerNames.DungeonMaster, result: "20" },
      { rollerName: TestRollerNames.Torenx, result: "20" },
      { rollerName: TestRollerNames.Torenx, result: "1" },
      { rollerName: TestRollerNames.Dorkus, result: "10" },
      { rollerName: TestRollerNames.Dorkus, result: "5" },
      { rollerName: TestRollerNames.Dorkus, result: "10" },
      { rollerName: TestRollerNames.Dorkus, result: "9" },
      { rollerName: TestRollerNames.Dorkus, result: "19" },
      { rollerName: TestRollerNames.Dorkus, result: "6" },
      { rollerName: TestRollerNames.DungeonMaster, result: "10" },
      { rollerName: TestRollerNames.Dorkus, result: "3" },
      { rollerName: TestRollerNames.Dorkus, result: "8" },
      { rollerName: TestRollerNames.Torenx, result: "8" },
      { rollerName: TestRollerNames.Ellywick, result: "2" },
      { rollerName: TestRollerNames.Dorkus, result: "16" },
      { rollerName: TestRollerNames.DungeonMaster, result: "1" },
      { rollerName: TestRollerNames.DungeonMaster, result: "5" },
      { rollerName: TestRollerNames.Dorkus, result: "8" },
      { rollerName: TestRollerNames.Dorkus, result: "1" },
      { rollerName: TestRollerNames.Torenx, result: "3" },
      { rollerName: TestRollerNames.Torenx, result: "14" },
      { rollerName: TestRollerNames.DungeonMaster, result: "4" },
      { rollerName: TestRollerNames.DungeonMaster, result: "8" },
      { rollerName: TestRollerNames.Dorkus, result: "12" },
      { rollerName: TestRollerNames.Dorkus, result: "12" },
      { rollerName: TestRollerNames.Torenx, result: "18" },
      { rollerName: TestRollerNames.Torenx, result: "19" },
      { rollerName: TestRollerNames.Ellywick, result: "6" },
      { rollerName: TestRollerNames.Ellywick, result: "2" },
      { rollerName: TestRollerNames.Ellywick, result: "16" },
      { rollerName: TestRollerNames.Ellywick, result: "4" },
      { rollerName: TestRollerNames.Dorkus, result: "6" },
      { rollerName: TestRollerNames.Dorkus, result: "1" },
      { rollerName: TestRollerNames.Torenx, result: "16" },
      { rollerName: TestRollerNames.Torenx, result: "15" },
      { rollerName: TestRollerNames.Ellywick, result: "20" },
      { rollerName: TestRollerNames.Ellywick, result: "16" },
      { rollerName: TestRollerNames.Dorkus, result: "6" },
      { rollerName: TestRollerNames.Dorkus, result: "8" },
    ],
    rollerNames: [
      TestRollerNames.DungeonMaster,
      TestRollerNames.Nate,
      TestRollerNames.Dorkus,
      TestRollerNames.Ellywick,
      TestRollerNames.Torenx
    ]
  };
});
