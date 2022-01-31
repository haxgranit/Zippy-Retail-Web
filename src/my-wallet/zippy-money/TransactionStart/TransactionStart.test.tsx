import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStart from './TransactionStart';
import MAIN_INFO from '../../../stories/MainInfo';
import { SendMoneyStepsEnum } from '../SendMoneyStepsEnum';
import { TransactionTypeEnum } from '../TransactionTypeEnum';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionStart Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <TransactionStart
          accountsList={[]}
          contactList={[]}
          errorMessage=""
          handleTriggerTransaction={undefined}
          isProcessing={false}
          mainInfo={MAIN_INFO}
          selectedAccount={0}
          selectedContact={0}
          setMainInfo={jest.fn()}
          setSelectedAccount={jest.fn()}
          setSelectedContact={jest.fn()}
          step={SendMoneyStepsEnum.TRANSACTION_START}
          transactionType={TransactionTypeEnum.SEND}
          setTunnelType={jest.fn()}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
