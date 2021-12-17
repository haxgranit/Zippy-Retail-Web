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
}) => (
  <DetailsPage
    mainInfo={mainInfo}
    contacts={contacts}
    accounts={accounts}
    selectedContact={selectedContact}
    setContactToSend={() => {}}
    setMainInfo={() => {}}
    setCurrentStep={() => {}}
    setRealStep={() => {}}
  />
);

export const Default = Template.bind({});
Default.args = {};
