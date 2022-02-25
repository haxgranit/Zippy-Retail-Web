import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedCancelled from './ReceivedCancelled';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/received/ReceivedCancelled',
  component: ReceivedCancelled,
} as ComponentMeta<typeof ReceivedCancelled>;

const Template: ComponentStory<typeof ReceivedCancelled> = () => (
  <BrowserRouter>
    <ReceivedCancelled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
