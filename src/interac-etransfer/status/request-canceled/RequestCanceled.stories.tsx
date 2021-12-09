import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestCanceled from './RequestCanceled';

export default {
  title: 'interac-etransfer/status/request-canceled/RequestCanceled',
  component: RequestCanceled,
} as ComponentMeta<typeof RequestCanceled>;

const Template: ComponentStory<typeof RequestCanceled> = () => (
  <BrowserRouter>
    <RequestCanceled />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
