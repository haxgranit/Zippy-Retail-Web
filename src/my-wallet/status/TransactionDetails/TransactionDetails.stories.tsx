import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TransactionDetails from './TransactionDetails';

export default {
  title: 'my-wallet/zippy-money/TransactionDetails',
  component: TransactionDetails,
} as ComponentMeta<typeof TransactionDetails>;

const Template: ComponentStory<typeof TransactionDetails> = () => (
  <BrowserRouter>
    <TransactionDetails />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
