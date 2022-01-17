import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCanceled from './RequestedCanceled';

export default {
  title: 'interac-etransfer/status/completed/RequestedCompleted',
  component: RequestedCanceled,
} as ComponentMeta<typeof RequestedCanceled>;

const Template: ComponentStory<typeof RequestedCanceled> = () => (
  <BrowserRouter>
    <RequestedCanceled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
