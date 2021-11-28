import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import AddCardHolder from './AddACardHolder';

export default {
  title: 'customer-services/add-cardholder/AddCardHolder',
  component: AddCardHolder,
} as ComponentMeta<typeof AddCardHolder>;

const Template: ComponentStory<typeof AddCardHolder> = () => <AddCardHolder />;

export const Default = Template.bind({});
Default.args = {};
