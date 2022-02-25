import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentCancelled from './SentCancelled';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/sent/completed/SentCancelled',
  component: SentCancelled,
} as ComponentMeta<typeof SentCancelled>;

const Template: ComponentStory<typeof SentCancelled> = () => (
  <BrowserRouter>
    <SentCancelled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
