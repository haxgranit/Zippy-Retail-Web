import { ComponentStory, ComponentMeta } from '@storybook/react';
import TransferSentCompletePage from './TransferSentCompletePage';

export default {
  title: 'interac-etransfer/send-money/components/TransferSentCompletePage',
  component: TransferSentCompletePage,
} as ComponentMeta<typeof TransferSentCompletePage>;

const Template: ComponentStory<typeof TransferSentCompletePage> = () => (
  <TransferSentCompletePage />
);

export const Default = Template.bind({});
Default.args = {};
