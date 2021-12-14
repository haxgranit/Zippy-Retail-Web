import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import ACCOUNTS from './Accounts';
import SendMoney from './SendMoney';

export default {
  title: 'interac-etransfer/send-money/SendMoney',
  component: SendMoney,
} as ComponentMeta<typeof SendMoney>;

const Template: ComponentStory<typeof SendMoney> = () => <SendMoney />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  msw: [
    rest.get(
      'https://zippy-retail-api-dev.azurewebsites.net/Accounts',
      (_req, res, ctx) => res(ctx.json(ACCOUNTS)),
    ),
  ],
};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {
  msw: [
    rest.get(
      'https://zippy-retail-api-dev.azurewebsites.net/Accounts',
      (_req, res, ctx) => res(ctx.status(403)),
    ),
  ],
};
