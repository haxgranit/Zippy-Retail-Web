import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedPending from './ReceivedPending';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/received/ReceivedPending',
  component: ReceivedPending,
} as ComponentMeta<typeof ReceivedPending>;

const Template: ComponentStory<typeof ReceivedPending> = () => (
  <BrowserRouter>
    <ReceivedPending
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
