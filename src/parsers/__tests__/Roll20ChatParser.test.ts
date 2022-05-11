import { DiceRollType, RollDataDiceRollsPropertyName } from '../../model/DiceRollInterfaces';
import {
  testRollerNameDM,
  testRollerNameDorkus,
  testRollerNameEllywick,
  testRollerNameNate,
  testRollerNameTorenx
} from '../../__tests__/TestRollerNames';
import Roll20ChatParser from '../Roll20ChatParser';
import {
  generateRoll20Chat,
  testHtmlContentBasicExample,
  testHtmlContentSingleBeyond20RollUsingDnDBeyondDice,
  testHtmlContentSingleBeyond20RollUsingRoll20DiceWithoutQuantumRollMarker,
  testHtmlContentSingleBeyond20RollUsingRoll20DiceWithQuantumRollMarker,
  testHtmlContentSingleRoll20SheetRollWithoutQuantumRollMarker,
  testHtmlContentSingleRoll20SheetRollWithQuantumRollMarker,
  testHtmlContentSingleStandardRoll
} from './TestRoll20ChatHtmlContent';

test.each([
  testHtmlContentSingleStandardRoll,
  testHtmlContentSingleRoll20SheetRollWithQuantumRollMarker,
  testHtmlContentSingleRoll20SheetRollWithoutQuantumRollMarker,
  testHtmlContentSingleBeyond20RollUsingRoll20DiceWithQuantumRollMarker,
  testHtmlContentSingleBeyond20RollUsingRoll20DiceWithoutQuantumRollMarker,
  testHtmlContentSingleBeyond20RollUsingDnDBeyondDice
])
  ('Returns correct results from single standard dice roll', (testHtmlInput: string) => {
    const testDOM = new DOMParser().parseFromString(testHtmlInput, 'text/html');
    expect(testDOM.getElementsByTagName('parsererror')).toHaveLength(0);

    const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(testDOM);

    expect(rollData.rollerNames).toHaveLength(1);
    expect(rollData.rollerNames[0]).toBe('DM (Kevin) (GM)');
    expect(rollData[RollDataDiceRollsPropertyName.d20]).toHaveLength(1);
    expect(rollData[RollDataDiceRollsPropertyName.d20][0].rollerName).toBe('DM (Kevin) (GM)');
    expect(rollData[RollDataDiceRollsPropertyName.d20][0].result).toBe('7');
  });

it('Returns correct results from sample roll20 chat', () => {
  const testDOM = new DOMParser().parseFromString(testHtmlContentBasicExample, 'text/html');
  expect(testDOM.getElementsByTagName('parsererror')).toHaveLength(0);

  const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(testDOM);

  expect(rollData.rollerNames).toHaveLength(5);
  expect(rollData.rollerNames).toContain(testRollerNameDM);
  expect(rollData.rollerNames).toContain(testRollerNameNate);
  expect(rollData.rollerNames).toContain(testRollerNameDorkus);
  expect(rollData.rollerNames).toContain(testRollerNameEllywick);
  expect(rollData.rollerNames).toContain(testRollerNameTorenx);
  expect(rollData[RollDataDiceRollsPropertyName.d20]).toHaveLength(138);
});

it('Returns correct results from generated chat', () => {
  const generatedHtml = generateRoll20Chat([
    {
      rollerName: testRollerNameDM,
      rolls: {
        [DiceRollType.d20]: 1
      }
    },
    {
      rollerName: testRollerNameDorkus,
      rolls: {
        [DiceRollType.d20]: 1
      }
    },
    {
      rollerName: testRollerNameDM,
      rolls: {
        [DiceRollType.d20]: 24,
        [DiceRollType.d8]: 15,
        [DiceRollType.d6]: 10
      }
    },
    {
      rollerName: testRollerNameDorkus,
      rolls: {
        [DiceRollType.d20]: 14,
        [DiceRollType.d8]: 5,
        [DiceRollType.d6]: 10
      }
    }
  ]);
  const testDOM = new DOMParser().parseFromString(generatedHtml, 'text/html');
  expect(testDOM.getElementsByTagName('parsererror')).toHaveLength(0);

  const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(testDOM);

  expect(rollData.rollerNames).toHaveLength(2);
  expect(rollData.rollerNames).toContain(testRollerNameDM);
  expect(rollData.rollerNames).toContain(testRollerNameDorkus);
  expect(rollData[RollDataDiceRollsPropertyName.d20]).toHaveLength(40);
});
