import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import MakeALoanPayment from './MakeALoanPayment';

export default {
  title: 'customer-services/make-a-loan-payment/MakeALoanPayment',
  component: MakeALoanPayment,
} as ComponentMeta<typeof MakeALoanPayment>;

const Template: ComponentStory<typeof MakeALoanPayment> = () => <MakeALoanPayment />;

export const Default = Template.bind({});
Default.args = {};
