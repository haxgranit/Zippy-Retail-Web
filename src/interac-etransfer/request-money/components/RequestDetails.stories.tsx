import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestDetails from './RequestDetails';

export default {
  title: 'interac-etransfer/request-money/components/RequestDetails',
  component: RequestDetails,
} as ComponentMeta<typeof RequestDetails>;

const Template: ComponentStory<typeof RequestDetails> = ({
  setCurrentStep,
}) => (
  <BrowserRouter>
    <RequestDetails setCurrentStep={setCurrentStep} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
