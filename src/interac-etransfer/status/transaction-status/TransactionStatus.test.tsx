import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStatus from './TransactionStatus';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionsStatus Component', () => {
  it('should render TransactionsStatus', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();
    render(
      <BrowserRouter>
        <TransactionStatus />
      </BrowserRouter>,
    );

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);
    expect(screen.getByText('STATUS')).toBeInTheDocument();
  });
});
