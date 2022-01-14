import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCanceled from './RequestedCanceled';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RequestedCanceled Component', () => {
  it('should render RequestedCanceled', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();
    render(
      <BrowserRouter>
        <RequestedCanceled
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
