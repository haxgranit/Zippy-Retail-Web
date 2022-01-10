import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentCompleted from './SentCompleted';

export default {
  title: 'interac-etransfer/status/request-sent/RequestSent',
  component: SentCompleted,
} as ComponentMeta<typeof SentCompleted>;

const Template: ComponentStory<typeof SentCompleted> = () => (
  <BrowserRouter>
    <SentCompleted />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
