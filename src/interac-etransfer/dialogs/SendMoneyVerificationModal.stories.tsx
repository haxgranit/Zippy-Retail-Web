import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import SendMoneyVerificationModal, {
  SendMoneyVerificationModalProps,
} from './SendMoneyVerificationModal';

export default {
  title: 'interac-etransfer/dialogs/SendMoneyVerificationModal',
  component: SendMoneyVerificationModal,
} as ComponentMeta<typeof SendMoneyVerificationModal>;

const Template: ComponentStory<typeof SendMoneyVerificationModal> = ({
  show,
  handleClose,
  handleNext,
  handleBack,
  isSendingMoney,
}: SendMoneyVerificationModalProps) => (
  <SendMoneyVerificationModal
    show={show}
    handleClose={handleClose}
    handleNext={handleNext}
    handleBack={handleBack}
    isSendingMoney={isSendingMoney}
  />
);
export const Default = Template.bind({});
