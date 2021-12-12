import { ComponentStory, ComponentMeta } from '@storybook/react';
import RequestDetails from './RequestDetails';

export default {
  title: 'interac-etransfer/request-money/components/RequestDetails',
  component: RequestDetails,
} as ComponentMeta<typeof RequestDetails>;

const Template: ComponentStory<typeof RequestDetails> = () => (
  <RequestDetails setCurrentStep={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
