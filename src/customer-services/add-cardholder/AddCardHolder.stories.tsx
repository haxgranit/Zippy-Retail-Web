import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../index.css';
import AddCardHolder from './AddCardHolder';

export default {
  title: 'customer-services/add-cardholder/AddCardHolder',
  component: AddCardHolder,
} as ComponentMeta<typeof AddCardHolder>;

const Template: ComponentStory<typeof AddCardHolder> = () => (
  <BrowserRouter>
    <AddCardHolder />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
