import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Options from './Options';

export default {
  title: 'my-wallet/load/Options',
  component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = () => (
  <BrowserRouter>
    <Options fundingSources={[{ bankAccount: { accountNumber: 'Some Number' } }]} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  fundingSources: [{ bankAccount: { accountNumber: 'Some Number' } }],
};
Default.parameters = {
};
