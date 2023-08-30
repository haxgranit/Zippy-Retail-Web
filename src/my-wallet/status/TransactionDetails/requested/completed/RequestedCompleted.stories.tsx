import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCompleted from './RequestedCompleted';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/completed/RequestedCompleted',
  component: RequestedCompleted,
} as ComponentMeta<typeof RequestedCompleted>;

const Template: ComponentStory<typeof RequestedCompleted> = () => (
  <BrowserRouter>
    <RequestedCompleted
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
