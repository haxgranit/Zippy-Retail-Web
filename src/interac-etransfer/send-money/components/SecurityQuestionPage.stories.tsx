import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecurityQuestionPage from './SecurityQuestionPage';

export default {
  title: 'interac-etransfer/send-money/components/SecurityQuestionPage',
  component: SecurityQuestionPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    setPageIndex: { action: 'setPageIndex' },
  },
} as ComponentMeta<typeof SecurityQuestionPage>;

const Template: ComponentStory<typeof SecurityQuestionPage> = (
  setPageIndex,
  setCurrentStep,
) => (
  <SecurityQuestionPage
    setCurrentStep={setCurrentStep}
    setPageIndex={setPageIndex}
  />
);

export const Default = Template.bind({});
Default.args = {};
