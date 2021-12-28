import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ACCOUNTS from '../../../stories/Accounts';
import CONTACTS from '../../../stories/Contacts';
import { RequestDetailPure } from './RequestDetails';

export default {
  title: 'interac-etransfer/request-money/components/RequestDetails',
  component: RequestDetailPure,
} as ComponentMeta<typeof RequestDetailPure>;

const Template: ComponentStory<typeof RequestDetailPure> = ({
  setCurrentStep,
  accountsData,
  contacts,
}) => (
  <BrowserRouter>
    <RequestDetailPure
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
