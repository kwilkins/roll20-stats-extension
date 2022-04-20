import { GroupRollsByAlias, CalculateStatistics } from '../StatisticsService';
import {
  mockRollData,
  mockRollerNameDM,
  mockRollerNameDorkus,
  mockRollerNameEllywick,
  mockRollerNameNate,
  mockRollerNameTorenx } from '../../__mocks__/roll20_chat_parser.mock';
import { DiceRollType } from '../../model/DiceRollInterfaces';
import { IStatistic } from '../../model/StatisticsInterfaces';

it('groups without aliases properly', () => {
  const groupedResult = GroupRollsByAlias(mockRollData);
  expect(Object.keys(groupedResult)).toHaveLength(5);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameDM);
  expect(groupedResult[mockRollerNameDM].d20).toHaveLength(25);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameDorkus);
  expect(groupedResult[mockRollerNameDorkus].d20).toHaveLength(45);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameEllywick);
  expect(groupedResult[mockRollerNameEllywick].d20).toHaveLength(29);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameNate);
  expect(groupedResult[mockRollerNameNate].d20).toHaveLength(14);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameTorenx);
  expect(groupedResult[mockRollerNameTorenx].d20).toHaveLength(23);
});

it('groups with aliases properly', () => {
  const aliasMap = {
    [mockRollerNameNate]: mockRollerNameTorenx
  };
  const groupedResult = GroupRollsByAlias(mockRollData, aliasMap);
  expect(Object.keys(groupedResult)).toHaveLength(4);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameDM);
  expect(groupedResult[mockRollerNameDM].d20).toHaveLength(25);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameDorkus);
  expect(groupedResult[mockRollerNameDorkus].d20).toHaveLength(45);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameEllywick);
  expect(groupedResult[mockRollerNameEllywick].d20).toHaveLength(29);
  expect(Object.keys(groupedResult)).toContain(mockRollerNameTorenx);
  expect(groupedResult[mockRollerNameTorenx].d20).toHaveLength(37);
  expect(Object.keys(groupedResult)).not.toContain(mockRollerNameNate);
});

it('calculates stats properly', () => {
  const groupedResult = GroupRollsByAlias(mockRollData);
  const statistics = CalculateStatistics(groupedResult);
  expect(statistics).toHaveLength(5);
  expect(statistics[0].rollerName).toBe(mockRollerNameDM);
  expect(statistics[0].diceRollStatistics).toHaveLength(1);
  expect(statistics[0].diceRollStatistics[0].rollCount).toBe(25);
  expect(statistics[0].diceRollStatistics[0].rollType).toBe(DiceRollType.d20);
  expect(Object.values(statistics[0].diceRollStatistics[0].statisticData)).toHaveLength(6);
  expect(Object.values(statistics[0].diceRollStatistics[0].statisticData).filter((x: IStatistic) => x.shouldDisplay)).toHaveLength(3);
});

const correctCalculations = `
DM (Kevin) (GM)
25 D20 rolls
# of 20s: 1
# of 1s: 1
Most Common Roll: 4

Nate
14 D20 rolls
# of 20s: 1
# of 1s: 1
Most Common Roll: 2

Dorkus
45 D20 rolls
# of 20s: 3
# of 1s: 3
Most Common Roll: 9

Ellywick 'Stumbleduck' Timbers
29 D20 rolls
# of 20s: 2
# of 1s: 1
Most Common Roll: 15

Torenx
23 D20 rolls
Average: 11.73913043478261
# of 20s: 2
# of 1s: 1
Most Common Roll: 3
`;