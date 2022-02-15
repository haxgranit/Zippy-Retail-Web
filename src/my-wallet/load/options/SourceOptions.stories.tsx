import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import SourceOptions from './SourceOptions';

export default {
  title: 'my-wallet/load/SourceOptions',
  component: SourceOptions,
} as ComponentMeta<typeof SourceOptions>;

const Template: ComponentStory<typeof SourceOptions> = () => (
  <BrowserRouter>
    <SourceOptions fundingSources={[{ bankAccount: { accountNumber: 'Some Number' } }]} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  fundingSources: [{ bankAccount: { accountNumber: 'Some Number' } }],
};
Default.parameters = {
};
