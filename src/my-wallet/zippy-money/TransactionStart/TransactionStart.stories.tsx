import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStart from './TransactionStart';
import MAIN_INFO from '../../../stories/MainInfo';
import { SendMoneyStepsEnum } from '../SendMoneyStepsEnum';
import { TransactionTypeEnum } from '../TransactionTypeEnum';

export default {
  title: 'my-wallet/zippy-money/TransactionStart',
  component: TransactionStart,
} as ComponentMeta<typeof TransactionStart>;

const Template: ComponentStory<typeof TransactionStart> = () => (
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
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
