import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import FundingSourceDetails from './FundingSourceDetails';

export default {
  title: 'my-wallet/funding-source/FundingSourceDetails',
  component: FundingSourceDetails,
} as ComponentMeta<typeof FundingSourceDetails>;

const Template: ComponentStory<typeof FundingSourceDetails> = () => (
  <BrowserRouter>
    <FundingSourceDetails />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
