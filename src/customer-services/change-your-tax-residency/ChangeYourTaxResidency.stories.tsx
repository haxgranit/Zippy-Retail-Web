import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ChangeYourTaxResidency from './ChangeYourTaxResidency';

export default {
  title: 'customer-services/change-your-tax-residency/ChangeYourTaxResidency',
  component: ChangeYourTaxResidency,
} as ComponentMeta<typeof ChangeYourTaxResidency>;

const Template: ComponentStory<typeof ChangeYourTaxResidency> = () => (
  <ChangeYourTaxResidency />
);

export const Default = Template.bind({});
Default.args = {};
