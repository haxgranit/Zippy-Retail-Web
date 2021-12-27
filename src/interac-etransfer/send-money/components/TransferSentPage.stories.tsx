import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateTime } from 'luxon';
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
  setPageIndex,
  isCompleted,
  transferInformation,
}) => (
  <BrowserRouter>
    <TransferSentPage
      setCurrentStep={setCurrentStep}
      setPageIndex={setPageIndex}
      isCompleted={isCompleted}
      transferInformation={transferInformation}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  isCompleted: true,
  transferInformation: TRANSFER_INFORMATION,
};

export const Empty = Template.bind({});
Empty.args = {
  transferInformation: {
    source: { email: '', name: '' },
    destination: { email: '', name: '' },
    fromAccount: '',
    expiryDate: DateTime.fromISO('2021-08-06T13:07:04.054'),
    submitted: DateTime.fromISO('2021-12-06T13:07:04.054'),
    securityQuestion: '',
    amount: 0,
    balance: 0,
    referenceNumber: 0,
  },
};
