import { ComponentStory, ComponentMeta } from '@storybook/react';
import RequestSent from './RequestSent';

export default {
  title: 'interac-etransfer/request-money/components/RequestSent',
  component: RequestSent,
} as ComponentMeta<typeof RequestSent>;

const Template: ComponentStory<typeof RequestSent> = () => (
  <RequestSent setCurrentStep={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
