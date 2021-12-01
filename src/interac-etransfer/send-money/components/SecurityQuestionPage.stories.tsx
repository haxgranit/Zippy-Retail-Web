import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecurityQuestionPage from './SecurityQuestionPage';

export default {
  title: 'interac-etransfer/send-money/components/SecurityQuestionPage',
  component: SecurityQuestionPage,
} as ComponentMeta<typeof SecurityQuestionPage>;

const Template: ComponentStory<typeof SecurityQuestionPage> = () => (
  <SecurityQuestionPage setCurrentStep={() => {}} setRealStep={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
