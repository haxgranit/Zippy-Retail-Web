import { ComponentStory, ComponentMeta } from '@storybook/react';
import CancelRequestForMoneyVerification, { CancelRequestForMoneyVerificationProps } from './CancelRequestForMoneyVerification';

export default {
  title:
    'interac-etransfer/status/dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification',
  component: CancelRequestForMoneyVerification,
} as ComponentMeta<typeof CancelRequestForMoneyVerification>;

const Template: ComponentStory<typeof CancelRequestForMoneyVerification> = ({
  show,
  handleBack,
  handleCancelRequest,
  transaction,
}: CancelRequestForMoneyVerificationProps) => (
  <CancelRequestForMoneyVerification
    show={show}
    handleCancelRequest={handleCancelRequest}
    handleBack={handleBack}
    transaction={transaction}
  />
);

export const Default = Template.bind({});
Default.args = {};
