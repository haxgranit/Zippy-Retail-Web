import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecurityRecipientPage from './SecurityRecipientPage';

export default {
  title: 'interac-etransfer/send-money/components/SecurityRecipientPage',
  component: SecurityRecipientPage,
} as ComponentMeta<typeof SecurityRecipientPage>;

const Template: ComponentStory<typeof SecurityRecipientPage> = () => (
  <SecurityRecipientPage setCurrentStep={() => {}} setPageIndex={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
