import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '../../test-utils';
import SendMoney from './SendMoney';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    step: 1,
  }),
}));

describe('SendMoney Component', () => {
  test('should render StepComponent inside a SendMoney', () => {
    render(<SendMoney />);
    expect(screen.getByText('Steps:')).toBeInTheDocument();
  });

  test('should render DetailsPage inside a SendMoney', () => {
    render(<SendMoney />);
    expect(
      screen.getByText('Your Interac e-Transfer Details'),
    ).toBeInTheDocument();
  });

  test('click buttons on SendMoneyVerificationModal', async () => {
    const { container } = render(<SendMoney />);
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
    await waitFor(() => screen.getByText('Continue'));
  });

  test('change user account and click buttons', () => {
    const { container } = render(<SendMoney />);
    expect(
      screen.getByText('Your Interac e-Transfer Details'),
    ).toBeInTheDocument();
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], {
      target: { value: 2 },
    });
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
  });
});
