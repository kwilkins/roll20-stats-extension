import { render, screen } from '@testing-library/react';
import { TestRollerNames } from '../../TestData';
import RollerAliasInputList from '../RollerAliasInputList';

const onAliasChangeCallbackMock = jest.fn(),
  testRollerNames = [
    TestRollerNames.DungeonMaster,
    TestRollerNames.Nate,
    TestRollerNames.Dorkus,
    TestRollerNames.Ellywick,
    TestRollerNames.Torenx
  ];

describe('RollerAliasInputList', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without error', () => {
    render(<RollerAliasInputList rollerNames={[]} onAliasChangeCallback={onAliasChangeCallbackMock} />);
  });

  it('renders corect number of inputs', () => {
    render(<RollerAliasInputList rollerNames={testRollerNames} onAliasChangeCallback={onAliasChangeCallbackMock} />);
    
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes).toHaveLength(testRollerNames.length);
  });

  it('invokes correct callback', () => {
    render(<RollerAliasInputList rollerNames={testRollerNames} onAliasChangeCallback={onAliasChangeCallbackMock} />);
    
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes).toHaveLength(testRollerNames.length);
  });
});
