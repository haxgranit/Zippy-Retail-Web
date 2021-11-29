import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import PayAndFileBusinessTaxes from './PayAndFileBusinessTaxes';

export default {
  title: 'customer-services/PayAndFileBusinessTaxes/PayAndFileBusinessTaxes',
  component: PayAndFileBusinessTaxes,
} as ComponentMeta<typeof PayAndFileBusinessTaxes>;

const Template: ComponentStory<typeof PayAndFileBusinessTaxes> = () => (
  <PayAndFileBusinessTaxes />
);

export const Default = Template.bind({});
Default.args = {};
