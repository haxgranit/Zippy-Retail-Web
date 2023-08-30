import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import LoadInitiate from './LoadInitiate';

export default {
  title: 'my-wallet/load/LoadInitiate',
  component: LoadInitiate,
} as ComponentMeta<typeof LoadInitiate>;

const Template: ComponentStory<typeof LoadInitiate> = () => (
  <BrowserRouter>
    <LoadInitiate />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
