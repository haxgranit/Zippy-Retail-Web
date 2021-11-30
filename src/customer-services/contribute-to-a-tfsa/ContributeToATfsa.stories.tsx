import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ContributeToTfsa from './ContributeToATfsa';

export default {
  title: 'customer-services/contribute-to-a-tfsa',
  component: ContributeToTfsa,
} as ComponentMeta<typeof ContributeToTfsa>;

const Template: ComponentStory<typeof ContributeToTfsa> = () => (
  <BrowserRouter>
    <ContributeToTfsa />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
