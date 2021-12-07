import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestReminder from './RequestReminder';

export default {
  title: 'interac-etransfer/request-reminder/RequestReminder',
  component: RequestReminder,
} as ComponentMeta<typeof RequestReminder>;

const Template: ComponentStory<typeof RequestReminder> = () => (
  <BrowserRouter>
    <RequestReminder />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
