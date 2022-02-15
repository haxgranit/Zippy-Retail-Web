import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import LoadStatus from './LoadStatus';

export default {
  title: 'my-wallet/load/LoadStatus',
  component: LoadStatus,
} as ComponentMeta<typeof LoadStatus>;

const Template: ComponentStory<typeof LoadStatus> = () => (
  <BrowserRouter>
    <LoadStatus />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
