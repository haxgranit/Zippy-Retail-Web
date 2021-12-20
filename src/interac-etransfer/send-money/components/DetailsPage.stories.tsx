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
}) => (
  <DetailsPage
    mainInfo={mainInfo}
    contacts={contacts}
    accounts={accounts}
    selectedContact={selectedContact}
    setContactToSend={() => {}}
    setMainInfo={() => {}}
    setCurrentStep={() => {}}
    setPageIndex={() => {}}
    selectedAccount={selectedAccount}
    setSelectedAccount={() => {}}
  />
);

export const Default = Template.bind({});
Default.args = {};
