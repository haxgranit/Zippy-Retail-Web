import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestedReminder from './RequestedReminder';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RequestedReminder Component', () => {
  it('should render RequestedReminder', () => {
    render(
      <BrowserRouter>
        <RequestedReminder
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Transfer Amount')).toBeInTheDocument();
  });
});
