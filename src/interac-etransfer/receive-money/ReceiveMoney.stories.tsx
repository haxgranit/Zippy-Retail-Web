import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReceiveMoney from './ReceiveMoney';

export default {
  title: 'interac-etransfer/receive-money/ReceiveMoney',
  component: ReceiveMoney,
} as ComponentMeta<typeof ReceiveMoney>;

const Template: ComponentStory<typeof ReceiveMoney> = () => (
  <ReceiveMoney />
);

export const Default = Template.bind({});
Default.args = {};
