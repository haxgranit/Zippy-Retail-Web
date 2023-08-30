import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestedReminder from './RequestedReminder';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RequestedReminder Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <RequestedReminder
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
          type={TransactionTypePastTenseEnum.ALL}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render RequestedReminder', () => {
    render(
      <BrowserRouter>
        <RequestedReminder
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
          type={TransactionTypePastTenseEnum.ALL}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Transfer Amount')).toBeInTheDocument();
  });
});
