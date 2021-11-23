import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import UpcomingBillPaymentsAndTransfers from './UpcomingBillPaymentsAndTransfers';

export default {
  title: 'ViewEstatements',
  component: UpcomingBillPaymentsAndTransfers,
} as ComponentMeta<typeof UpcomingBillPaymentsAndTransfers>;

const Template: ComponentStory<
  typeof UpcomingBillPaymentsAndTransfers
> = () => <UpcomingBillPaymentsAndTransfers />;

export const Default = Template.bind({});
Default.args = {};
