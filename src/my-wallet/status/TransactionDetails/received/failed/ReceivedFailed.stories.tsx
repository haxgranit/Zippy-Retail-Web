import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedFailed from './ReceivedFailed';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/received/ReceivedFailed',
  component: ReceivedFailed,
} as ComponentMeta<typeof ReceivedFailed>;

const Template: ComponentStory<typeof ReceivedFailed> = () => (
  <BrowserRouter>
    <ReceivedFailed
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
