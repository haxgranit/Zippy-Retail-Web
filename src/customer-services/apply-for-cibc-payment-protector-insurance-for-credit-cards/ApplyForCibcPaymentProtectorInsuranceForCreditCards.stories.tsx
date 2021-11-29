import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ApplyForCibcPaymentProtectorInsuranceForCreditCards from './ApplyForCibcPaymentProtectorInsuranceForCreditCards';

export default {
  title: 'customer-services/apply-for-cibc-payment-protector-insurance-for-credit-cards/ApplyForCibcPaymentProtectorInsuranceForCreditCards',
  component: ApplyForCibcPaymentProtectorInsuranceForCreditCards,
} as ComponentMeta<typeof ApplyForCibcPaymentProtectorInsuranceForCreditCards>;

const Template: ComponentStory<typeof ApplyForCibcPaymentProtectorInsuranceForCreditCards> = () => (
  <ApplyForCibcPaymentProtectorInsuranceForCreditCards />
);

export const Default = Template.bind({});
Default.args = {};
