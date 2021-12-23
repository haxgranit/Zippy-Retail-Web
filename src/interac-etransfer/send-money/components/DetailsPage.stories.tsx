import { ComponentStory, ComponentMeta } from '@storybook/react';
import DetailsPage from './DetailsPage';

export default {
  title: 'interac-etransfer/send-money/components/DetailsPage',
  component: DetailsPage,
} as ComponentMeta<typeof DetailsPage>;

const Template: ComponentStory<typeof DetailsPage> = ({
  accounts,
  contacts,
  mainInfo,
  selectedContact,
  selectedAccount,
  setContactToSend,
  setSelectedAccount,
  setPageIndex,
  setCurrentStep,
  setMainInfo,
}) => (
  <DetailsPage
    mainInfo={mainInfo}
    contacts={contacts}
    accounts={accounts}
    selectedContact={selectedContact}
    setContactToSend={setContactToSend}
    setMainInfo={setMainInfo}
    setCurrentStep={setCurrentStep}
    setPageIndex={setPageIndex}
    selectedAccount={selectedAccount}
    setSelectedAccount={setSelectedAccount}
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
