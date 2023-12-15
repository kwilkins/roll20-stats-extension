import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import * as ActiveTabScriptExecutor from '../services/ActiveTabScriptExecutor';
import { testHtmlContentBasicExample } from '../TestRoll20ChatHtmlContent';

jest.mock('../services/ActiveTabScriptExecutor');

const fetchRoll20ChatDOMMock = (ActiveTabScriptExecutor.fetchRoll20ChatDOM as jest.Mock);

describe('App', () => {
  it('renders initial loading message', () => {
    render(<App />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('groups a roller with another', async () => {
    fetchRoll20ChatDOMMock.mockResolvedValue({
      roll20ChatDOM: new DOMParser().parseFromString(testHtmlContentBasicExample, 'text/html')
    });

    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    
    const rollerElements = screen.getAllByRole('img', { name: 'Contact' }).map(x => x.parentElement);
    expect(rollerElements).toHaveLength(5);
    const firstRollerElement = rollerElements[0];
    const secondRollerElements = rollerElements[1];

    if (!firstRollerElement || !secondRollerElements) {
      fail('No rollers found to drag and drop');
    }

    expect(screen.queryByRole('button', { name: /(Expand|Collapse) grouped/i})).not.toBeInTheDocument();
    
    fireEvent.drop(secondRollerElements, {
      dataTransfer: {
        getData: () => firstRollerElement.textContent?.split(':')[0]
      },
    });

    await waitFor(() => expect(screen.getAllByRole('img', { name: 'Contact' })).toHaveLength(4));
    
    expect(screen.getByRole('button', { name: /(Expand|Collapse) grouped/i})).toBeInTheDocument();
    
    await userEvent.click(screen.getByRole('button', { name: /Expand grouped/i}));
    
    expect(screen.getAllByRole('img', { name: 'Contact' })).toHaveLength(5);
  });

  it('groups a grouped roller with another', async () => {
    fetchRoll20ChatDOMMock.mockResolvedValue({
      roll20ChatDOM: new DOMParser().parseFromString(testHtmlContentBasicExample, 'text/html')
    });

    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    
    const rollerElements = screen.getAllByRole('img', { name: 'Contact' }).map(x => x.parentElement);
    expect(rollerElements).toHaveLength(5);
    const firstRollerElement = rollerElements[0];
    const secondRollerElement = rollerElements[1];
    const thirdRollerElement = rollerElements[2];

    if (!firstRollerElement || !secondRollerElement || !thirdRollerElement) {
      fail('No rollers found to drag and drop');
    }

    expect(screen.queryByRole('button', { name: /(Expand|Collapse) grouped/i})).not.toBeInTheDocument();
    
    fireEvent.drop(secondRollerElement, {
      dataTransfer: {
        getData: () => firstRollerElement.textContent?.split(':')[0]
      },
    });
    fireEvent.drop(thirdRollerElement, {
      dataTransfer: {
        getData: () => secondRollerElement.textContent?.split(':')[0]
      },
    });

    await waitFor(() => expect(screen.getAllByRole('img', { name: 'Contact' })).toHaveLength(3));
    
    expect(screen.getByRole('button', { name: /(Expand|Collapse) grouped/i})).toBeInTheDocument();
    
    await userEvent.click(screen.getByRole('button', { name: /Expand grouped/i}));
    
    expect(screen.getAllByRole('img', { name: 'Contact' })).toHaveLength(5);
  });
});
