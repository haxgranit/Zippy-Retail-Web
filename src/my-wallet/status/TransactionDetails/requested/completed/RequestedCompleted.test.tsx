import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCompleted from './RequestedCompleted';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RequestedCompleted Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <RequestedCompleted
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
          type={TransactionTypePastTenseEnum.ALL}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render RequestedCompleted', () => {
    render(
      <BrowserRouter>
        <RequestedCompleted
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
          type={TransactionTypePastTenseEnum.ALL}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Transfer Date')).toBeInTheDocument();
    expect(screen.getByText('Transfer Amount')).toBeInTheDocument();
    expect(screen.getByText('Reference Number')).toBeInTheDocument();
    expect(screen.getByText('This Request Will Expire On')).toBeInTheDocument();
  });
});
