import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentFailed from './SentFailed';
import { TransactionTypePastTenseEnum } from '../../../../../constants/enum/TransactionTypePastTenseEnum';

export default {
  title: 'interac-etransfer/status/sent/completed/SentFailed',
  component: SentFailed,
} as ComponentMeta<typeof SentFailed>;

const Template: ComponentStory<typeof SentFailed> = () => (
  <BrowserRouter>
    <SentFailed
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
      type={TransactionTypePastTenseEnum.ALL}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
