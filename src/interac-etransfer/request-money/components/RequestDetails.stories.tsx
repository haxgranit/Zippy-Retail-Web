import { ComponentMeta } from '@storybook/react';
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
