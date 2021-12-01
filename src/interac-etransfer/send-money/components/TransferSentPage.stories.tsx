import { ComponentStory, ComponentMeta } from '@storybook/react';
import TransferSentPage from './TransferSentPage';

export default {
  title: 'interac-etransfer/send-money/components/TransferSentPage',
  component: TransferSentPage,
} as ComponentMeta<typeof TransferSentPage>;

const Template: ComponentStory<typeof TransferSentPage> = () => (
  <TransferSentPage />
);

export const Default = Template.bind({});
Default.args = {};
