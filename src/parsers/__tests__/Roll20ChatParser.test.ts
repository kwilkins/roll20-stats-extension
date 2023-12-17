import { DiceRollD20Name, DiceRollD6Name, DiceRollD8Name, RollDataDiceRollsPropertyName } from '../../model/DiceRollInterfaces';
import { TestRollerNames } from '../../TestData';
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
} from '../../TestRoll20ChatHtmlContent';

describe('Roll20ChatParser', () => {
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
    expect(rollData.rollerNames).toContain(TestRollerNames.DungeonMaster);
    expect(rollData.rollerNames).toContain(TestRollerNames.Nate);
    expect(rollData.rollerNames).toContain(TestRollerNames.Dorkus);
    expect(rollData.rollerNames).toContain(TestRollerNames.Ellywick);
    expect(rollData.rollerNames).toContain(TestRollerNames.Torenx);
    expect(rollData[RollDataDiceRollsPropertyName.d20]).toHaveLength(138);
  });
  
  it('Returns correct results from generated chat', () => {
    const generatedHtml = generateRoll20Chat([
      {
        rollerName: TestRollerNames.DungeonMaster,
        rolls: {
          [DiceRollD20Name]: 1
        }
      },
      {
        rollerName: TestRollerNames.Dorkus,
        rolls: {
          [DiceRollD20Name]: 1
        }
      },
      {
        rollerName: TestRollerNames.DungeonMaster,
        rolls: {
          [DiceRollD20Name]: 24,
          [DiceRollD8Name]: 15,
          [DiceRollD6Name]: 10
        }
      },
      {
        rollerName: TestRollerNames.Dorkus,
        rolls: {
          [DiceRollD20Name]: 14,
          [DiceRollD8Name]: 5,
          [DiceRollD6Name]: 10
        }
      }
    ]);
    const testDOM = new DOMParser().parseFromString(generatedHtml, 'text/html');
    expect(testDOM.getElementsByTagName('parsererror')).toHaveLength(0);
  
    const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(testDOM);
  
    expect(rollData.rollerNames).toHaveLength(2);
    expect(rollData.rollerNames).toContain(TestRollerNames.DungeonMaster);
    expect(rollData.rollerNames).toContain(TestRollerNames.Dorkus);
    expect(rollData[RollDataDiceRollsPropertyName.d20]).toHaveLength(40);
  });
});
