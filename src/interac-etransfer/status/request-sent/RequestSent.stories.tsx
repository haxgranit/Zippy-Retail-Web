import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestSent from './RequestSent';

export default {
  title: 'interac-etransfer/request-sent/RequestSent',
  component: RequestSent,
} as ComponentMeta<typeof RequestSent>;

const Template: ComponentStory<typeof RequestSent> = () => (
  <BrowserRouter>
    <RequestSent />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
