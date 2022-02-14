import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TransferDetails from './TransferDetails';

export default {
  title: 'my-wallet/load/TransferDetails',
  component: TransferDetails,
} as ComponentMeta<typeof TransferDetails>;

const Template: ComponentStory<typeof TransferDetails> = () => (
  <BrowserRouter>
    <TransferDetails />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
