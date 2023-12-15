import { render, screen } from '@testing-library/react';
import { IRollData, RollDataDiceRollsPropertyName } from '../../model/DiceRollInterfaces';
import { Roller } from '../../model/Roller';
import { TestRollerNames } from '../../TestData';
import RollerPersonaList from '../RollerPersonaList';

const onAliasChangeCallbackMock = jest.fn(),
  testRollerNameList = [
    TestRollerNames.DungeonMaster,
    TestRollerNames.Nate,
    TestRollerNames.Dorkus,
    TestRollerNames.Ellywick,
    TestRollerNames.Torenx
  ],
  testRollers: Roller[] = testRollerNameList.map((value) => ({ name: value, aliases: []})),
  testRollData: IRollData = {
    [RollDataDiceRollsPropertyName.d20]: [],
    rollerNames: testRollerNameList
  };

describe('RollerPersonaList', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without error', () => {
    const emptyRollData: IRollData = {
      [RollDataDiceRollsPropertyName.d20]: [],
      rollerNames: []
    };

    render(<RollerPersonaList
      rollers={[]}
      rollData={emptyRollData}
      onRollerGroupingCallback={onAliasChangeCallbackMock}
    />);
  });

  it('renders correct number of personas for ungrouped', () => {
    render(<RollerPersonaList
      rollers={testRollers}
      rollData={testRollData}
      onRollerGroupingCallback={onAliasChangeCallbackMock}
    />);
    
    testRollers.forEach((roller) => {
      screen.getAllByText(roller.name, { exact: false }).forEach((value) => {
        expect(value).toBeInTheDocument();
      })
    });
    expect(screen.getAllByRole('img')).toHaveLength(testRollerNameList.length);
  });

  it('renders correct number of personas for grouped', () => {
    const groupedTestRollers: Roller[] = testRollerNameList.map((value) => ({
      name: value,
      aliases: value === TestRollerNames.Torenx ? [] : [ TestRollerNames.Nate ]}));
    
    render(<RollerPersonaList
      rollers={groupedTestRollers}
      rollData={testRollData}
      onRollerGroupingCallback={onAliasChangeCallbackMock}
    />);
    
    groupedTestRollers.filter((roller) => roller.name !== TestRollerNames.Nate)
      .forEach((roller) => screen.getAllByText(roller.name, { exact: false }));
    expect(screen.getAllByRole('img')).toHaveLength(testRollerNameList.length - 1);
  });
});
