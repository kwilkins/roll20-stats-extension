import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders initial loading message', () => {
  render(<App />);
  const loadingMessage = screen.getByText(/loading/i);
  expect(loadingMessage).toBeInTheDocument();
});
