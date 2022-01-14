import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestPending from './RequestPending';

export default {
  title: 'interac-etransfer/status/pending/RequestSent',
  component: RequestPending,
} as ComponentMeta<typeof RequestPending>;

const Template: ComponentStory<typeof RequestPending> = () => (
  <BrowserRouter>
    <RequestPending />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
