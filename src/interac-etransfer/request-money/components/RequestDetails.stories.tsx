import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
/*
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ACCOUNTS from '../../../stories/Accounts';
import CONTACTS from '../../../stories/Contacts';
*/
import { RequestDetails } from './RequestDetails';

export default {
  title: 'interac-etransfer/request-money/components/RequestDetails',
  component: RequestDetails,
} as ComponentMeta<typeof RequestDetails>;

const Template: ComponentStory<typeof RequestDetails> = ({
  setPageIndex,
  setCurrentStep,
  selectedContact,
  setContactToSend,
  mainInfo,
  setMainInfo,
  accounts,
  contacts,
  selectedAccount,
  setSelectedAccount,
  setErrorMessage,
  showModal,
}) => (
  <BrowserRouter>
    <RequestDetails
      setPageIndex={setPageIndex}
      setCurrentStep={setCurrentStep}
      selectedContact={selectedContact}
      setContactToSend={setContactToSend}
      mainInfo={mainInfo}
      setMainInfo={setMainInfo}
      accounts={accounts}
      contacts={contacts}
      selectedAccount={selectedAccount}
      setSelectedAccount={setSelectedAccount}
      setErrorMessage={setErrorMessage}
      showModal={showModal}
    />
  </BrowserRouter>
);
export const Default = Template.bind({});
Default.args = {
  mainInfo: {
    amount: 3000,
    invoiceNumber: 1,
    message: 'Test message',
    notifyByEmail: true,
    notifyTextMessage: true,
    agreed: true,
  },
};
/*
const Template: ComponentStory<typeof RequestDetails> = ({
  setCurrentStep,
  accountsData,
  contacts,
}) => (
  <BrowserRouter>
    <RequestDetails
      accountsData={accountsData}
      contacts={contacts}
      setCurrentStep={setCurrentStep}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  accountsData: ACCOUNTS,
  contacts: CONTACTS,
};

export const Empty = Template.bind({});
Empty.args = {};
*/
