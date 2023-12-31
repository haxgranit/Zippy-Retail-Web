import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedPending from './RequestedPending';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/request/pending/RequestPending',
  component: RequestedPending,
} as ComponentMeta<typeof RequestedPending>;

const Template: ComponentStory<typeof RequestedPending> = () => (
  <BrowserRouter>
    <RequestedPending
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
