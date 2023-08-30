import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import ACCOUNTS from '../../../stories/Accounts';
import CONTACTS from '../../../stories/Contacts';
import TransactionStatusList from './TransactionStatusList';

export default {
  title: 'my-wallet/status',
  component: TransactionStatusList,
} as ComponentMeta<typeof TransactionStatusList>;

const Template: ComponentStory<typeof TransactionStatusList> = () => (
  <BrowserRouter>
    <TransactionStatusList />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  msw: [
    rest.get(
      'https://mock.net/Accounts',
      (_req, res, ctx) => res(ctx.json(ACCOUNTS)),
    ),
    rest.get(
      'https://mock.net/Contacts',
      (_req, res, ctx) => res(ctx.json(CONTACTS)),
    ),
  ],
};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {
  msw: [
    rest.get(
      'https://mock.net/Accounts',
      (_req, res, ctx) => res(ctx.status(403)),
    ),
    rest.get(
      'https://mock.net/Contacts',
      (_req, res, ctx) => res(ctx.status(403)),
    ),
  ],
};
