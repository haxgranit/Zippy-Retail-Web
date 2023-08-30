import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCancelled from './RequestedCancelled';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/completed/RequestedCompleted',
  component: RequestedCancelled,
} as ComponentMeta<typeof RequestedCancelled>;

const Template: ComponentStory<typeof RequestedCancelled> = () => (
  <BrowserRouter>
    <RequestedCancelled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
