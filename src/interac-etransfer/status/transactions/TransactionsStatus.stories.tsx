import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TransactionsStatus from './TransactionsStatus';

export default {
  title: 'interac-etransfer/status/transactions/TransactionsStatus',
  component: TransactionsStatus,
} as ComponentMeta<typeof TransactionsStatus>;

const Template: ComponentStory<typeof TransactionsStatus> = () => (
  <BrowserRouter>
    <TransactionsStatus />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
