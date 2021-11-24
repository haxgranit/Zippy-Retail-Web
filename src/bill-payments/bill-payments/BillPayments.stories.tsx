import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import BillPayments from './BillPayments';

export default {
  title: 'bill-payments/bill-payments/BillPayments',
  component: BillPayments,
} as ComponentMeta<typeof BillPayments>;

const Template: ComponentStory<typeof BillPayments> = () => <BillPayments />;

export const Default = Template.bind({});
Default.args = {};
