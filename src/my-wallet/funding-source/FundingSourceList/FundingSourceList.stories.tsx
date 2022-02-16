import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import FundingSourceList from './FundingSourceList';

export default {
  title: 'my-wallet/funding-source/FundingSourceList',
  component: FundingSourceList,
} as ComponentMeta<typeof FundingSourceList>;

const Template: ComponentStory<typeof FundingSourceList> = () => (
  <BrowserRouter>
    <FundingSourceList />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
