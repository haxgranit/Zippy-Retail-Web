import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCompleted from './RequestedCompleted';

export default {
  title: 'interac-etransfer/status/completed/RequestedCompleted',
  component: RequestedCompleted,
} as ComponentMeta<typeof RequestedCompleted>;

const Template: ComponentStory<typeof RequestedCompleted> = () => (
  <BrowserRouter>
    <RequestedCompleted
      transaction={undefined}
      user={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
