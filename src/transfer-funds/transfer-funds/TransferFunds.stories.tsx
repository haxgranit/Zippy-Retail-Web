import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import TransferFunds from './TransferFunds';

export default {
  title: 'transfer-funds/TransferFunds',
  component: TransferFunds,
} as ComponentMeta<typeof TransferFunds>;

const Template: ComponentStory<typeof TransferFunds> = () => <TransferFunds />;
export const Default = Template.bind({});
Default.args = {};
