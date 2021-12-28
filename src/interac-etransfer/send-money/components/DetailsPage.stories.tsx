import { ComponentStory, ComponentMeta } from '@storybook/react';
import DetailsPage from './DetailsPage';

export default {
  title: 'interac-etransfer/send-money/components/DetailsPage',
  component: DetailsPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    setPageIndex: { action: 'setPageIndex' },
  },
} as ComponentMeta<typeof DetailsPage>;

const Template: ComponentStory<typeof DetailsPage> = ({
  accounts,
  contacts,
  mainInfo,
  selectedContact,
  selectedAccount,
  setContactToSend,
  setSelectedAccount,
  setMainInfo,
  handleSecurity,
}) => (
  <DetailsPage
    mainInfo={mainInfo}
    contacts={contacts}
    accounts={accounts}
    selectedContact={selectedContact}
    setContactToSend={setContactToSend}
    setMainInfo={setMainInfo}
    selectedAccount={selectedAccount}
    setSelectedAccount={setSelectedAccount}
    handleSecurity={handleSecurity}
    isProcessing={false}
  />
);

export const Default = Template.bind({});
Default.args = {
  mainInfo: {
    amount: 10000,
    destination: { email: 'destination@email.com', name: 'destination name' },
    source: { email: 'source@email.com', name: 'source name' },
    fromAccount: 'fromAccount (8000 0000 00000000)',
    message: 'message',
    transferMethod: 'Email',
  },
};

export const Empty = Template.bind({});
Empty.args = {};
