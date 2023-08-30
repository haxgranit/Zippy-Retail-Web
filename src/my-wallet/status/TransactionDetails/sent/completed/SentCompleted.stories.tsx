import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentCompleted from './SentCompleted';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/sent/completed/SentCompleted',
  component: SentCompleted,
} as ComponentMeta<typeof SentCompleted>;

const Template: ComponentStory<typeof SentCompleted> = () => (
  <BrowserRouter>
    <SentCompleted
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
