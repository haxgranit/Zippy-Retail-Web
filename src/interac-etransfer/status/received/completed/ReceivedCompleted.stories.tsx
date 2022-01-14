import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedCompleted from './ReceivedCompleted';

export default {
  title: 'interac-etransfer/status/pending/RequestSent',
  component: ReceivedCompleted,
} as ComponentMeta<typeof ReceivedCompleted>;

const Template: ComponentStory<typeof ReceivedCompleted> = () => (
  <BrowserRouter>
    <ReceivedCompleted />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
