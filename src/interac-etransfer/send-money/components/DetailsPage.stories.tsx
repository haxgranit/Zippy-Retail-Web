import { ComponentStory, ComponentMeta } from '@storybook/react';
import MAIN_INFO from '../../../stories/MainInfo';
import DetailsPage from './DetailsPage';

export default {
  title: 'interac-etransfer/send-money/components/DetailsPage',
  component: DetailsPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    setPageIndex: { action: 'setPageIndex' },
    setErrorMessage: { action: 'setErrorMessage' },
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
  setErrorMessage,
  validateInputs,
  setCurrentStep,
  navigateSteps,
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
    setErrorMessage={setErrorMessage}
    validateInputs={validateInputs}
    setCurrentStep={setCurrentStep}
    navigateSteps={navigateSteps}
  />
);

export const Default = Template.bind({});
Default.args = {
  mainInfo: MAIN_INFO,
};

export const Empty = Template.bind({});
Empty.args = {};
