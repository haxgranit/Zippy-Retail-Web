import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../index.css';
import CustomerServices from './CustomerServices';

export default {
  title: 'customer-services/CustomerServices',
  component: CustomerServices,
} as ComponentMeta<typeof CustomerServices>;

const Template: ComponentStory<typeof CustomerServices> = () => <CustomerServices />;

export const Default = Template.bind({});
Default.args = {};
