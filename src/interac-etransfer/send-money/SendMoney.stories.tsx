import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendMoney from './SendMoney';

export default {
  title: 'interac-etransfer/send-money/SendMoney',
  component: SendMoney,
} as ComponentMeta<typeof SendMoney>;

const Template: ComponentStory<typeof SendMoney> = () => (
  <SendMoney />
);

export const Default = Template.bind({});
Default.args = {};
