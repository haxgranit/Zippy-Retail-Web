import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedReminder from './RequestedReminder';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/requested/reminder/RequestedReminder',
  component: RequestedReminder,
} as ComponentMeta<typeof RequestedReminder>;

const Template: ComponentStory<typeof RequestedReminder> = () => (
  <BrowserRouter>
    <RequestedReminder
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
