import { GroupRollsByAlias, CalculateStatistics } from '../StatisticsService';
import { rollData } from '../../__mocks__/roll20_chat_parser.mock';

it('groups without aliases properly', () => {
  const groupedResult = GroupRollsByAlias(rollData);
  expect(Object.keys(groupedResult)).toHaveLength(5);
  expect(groupedResult['DM (Kevin) (GM)'].d20).toHaveLength(25);
  expect(groupedResult['Dorkus'].d20).toHaveLength(45);
  expect(groupedResult[`Ellywick 'Stumbleduck' Timbers`].d20).toHaveLength(29);
  expect(groupedResult['Nate'].d20).toHaveLength(14);
  expect(groupedResult['Torenx'].d20).toHaveLength(23);
});

it('calculates stats properly', () => {
  const groupedResult = GroupRollsByAlias(rollData);
  const statistics = CalculateStatistics(groupedResult);
  expect(statistics).toHaveLength(5);
  expect(statistics[0].playerName).toBe('DM (Kevin) (GM)');
  expect(statistics[0].statisticTypes).toHaveLength(1);
  expect(statistics[0].statisticTypes[0].rollCount).toBe(25);
  expect(statistics[0].statisticTypes[0].rollType).toBe('D20');
  expect(Object.values(statistics[0].statisticTypes[0].statistics)).toHaveLength(3);
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