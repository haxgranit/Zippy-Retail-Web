import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCompleted from './RequestedCompleted';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RequestedCompleted Component', () => {
  it('should render RequestedCompleted', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();
    render(
      <BrowserRouter>
        <RequestedCompleted
          transaction={undefined}
          user={undefined}
        />
      </BrowserRouter>,
    );

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);
    expect(screen.getByText('STATUS')).toBeInTheDocument();
  });
});
