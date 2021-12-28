import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TRANSFER_INFORMATION from '../../../stories/TransferInformation';
import TransferSentPage from './TransferSentPage';

export default {
  title: 'interac-etransfer/send-money/components/TransferSentPage',
  component: TransferSentPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    setPageIndex: { action: 'setPageIndex' },
  },
} as ComponentMeta<typeof TransferSentPage>;

const Template: ComponentStory<typeof TransferSentPage> = ({
  setCurrentStep,
  isCompleted,
  transferInformation,
  navigateSteps,
}) => (
  <BrowserRouter>
    <TransferSentPage
      setCurrentStep={setCurrentStep}
      isCompleted={isCompleted}
      transferInformation={transferInformation}
      navigateSteps={navigateSteps}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  isCompleted: true,
  transferInformation: TRANSFER_INFORMATION,
};
