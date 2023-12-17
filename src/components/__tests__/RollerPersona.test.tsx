import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestRollerNames } from '../../TestData';
import RollerPersona, { GroupedRollerPersona } from '../RollerPersona';

const onRollerGroupingCallbackMock = jest.fn(),
  testName = TestRollerNames.DungeonMaster,
  testCount = 20;

describe('RollerPersona', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without error', () => {
    render(<RollerPersona
      groupedRollerList={[]}
      name=""
      rollCount={0}
      onRollerGroupingCallback={onRollerGroupingCallbackMock}
    />);
  });

  it('renders with correct name and roll values without grouped rollers', () => {
    render(<RollerPersona
      groupedRollerList={[]}
      name={testName}
      rollCount={testCount}
      onRollerGroupingCallback={onRollerGroupingCallbackMock}
    />);

    screen.getAllByText(`${testName}: ${testCount} d20 rolls`).forEach((value) => {
      expect(value).toBeInTheDocument();
    });
  });

  it.each([
    [{ name: TestRollerNames.Torenx, rollCount: 15 }],
    [{ name: TestRollerNames.Torenx, rollCount: 15 }, { name: TestRollerNames.Nate, rollCount: 7 }],
  ])('renders with correct name and roll values with grouped rollers', (...groupedRollerList: GroupedRollerPersona[]) => {
    const groupedRollCount = groupedRollerList.map((roller) => roller.rollCount).reduce((sum, value) => sum + value, 0);

    render(<RollerPersona
      groupedRollerList={groupedRollerList}
      name={testName}
      rollCount={testCount}
      onRollerGroupingCallback={onRollerGroupingCallbackMock}
    />);

    screen.getAllByText(`${testName}: ${testCount + groupedRollCount} d20 rolls`).forEach((value) => {
      expect(value).toBeInTheDocument();
    });
  });

  it.each([
    [[] as GroupedRollerPersona[]],
    [[{ name: TestRollerNames.Torenx, rollCount: 15 }]],
    [[{ name: TestRollerNames.Torenx, rollCount: 15 }, { name: TestRollerNames.Nate, rollCount: 7 }]],
  ])('renders an expando button for grouped rollers', (groupedRollerList: GroupedRollerPersona[]) => {
    render(<RollerPersona
      groupedRollerList={groupedRollerList}
      name={testName}
      rollCount={testCount}
      onRollerGroupingCallback={onRollerGroupingCallbackMock}
    />);

    if (groupedRollerList.length) {
      expect(screen.getByRole('button', { name: /grouped rollers$/ })).toBeInTheDocument();
    } else {
      expect(screen.queryByRole('button', { name: /grouped rollers$/ })).not.toBeInTheDocument();
    }
  });

  it('renders grouped roller names and counts when expando button is clicked', async () => {
    const groupedRollerList: GroupedRollerPersona[] = [
      {
        name: TestRollerNames.Torenx,
        rollCount: 15
      },
      {
        name: TestRollerNames.Nate,
        rollCount: 7
      }
    ],
    groupedRollCount = groupedRollerList.map((roller) => roller.rollCount).reduce((sum, value) => sum + value, 0);
    
    render(<RollerPersona
      groupedRollerList={groupedRollerList}
      name={testName}
      rollCount={testCount}
      onRollerGroupingCallback={onRollerGroupingCallbackMock}
    />);

    screen.getAllByText(`${testName}: ${testCount + groupedRollCount} d20 rolls`).forEach((value) => {
      expect(value).toBeInTheDocument();
    });
    groupedRollerList.forEach((groupedRoller: GroupedRollerPersona) => {
      expect(screen.queryByText(groupedRoller.name)).not.toBeInTheDocument();
      expect(screen.queryByText(`${groupedRoller.name}: ${groupedRoller.rollCount} d20 rolls`)).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getByRole('button', { name: /grouped rollers$/ }));

    screen.getAllByText(`${testName}: ${testCount} d20 rolls`).forEach((value) => {
      expect(value).toBeInTheDocument();
    });
    groupedRollerList.forEach((groupedRoller: GroupedRollerPersona) => {
      screen.getAllByText(`${groupedRoller.name}: ${groupedRoller.rollCount} d20 rolls`).forEach((value) => {
        expect(value).toBeInTheDocument();
      });
    });
  });
});
