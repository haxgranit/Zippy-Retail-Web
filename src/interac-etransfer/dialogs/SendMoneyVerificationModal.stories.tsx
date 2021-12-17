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
  transferDetails,
}: SendMoneyVerificationModalProps) => (
  <SendMoneyVerificationModal
    show={show}
    handleClose={handleClose}
    handleNext={handleNext}
    handleBack={handleBack}
    transferDetails={transferDetails}
  />
);
export const Default = Template.bind({});
Default.args = {
  transferDetails: {
    source: { name: 'name', email: 'email@zippy.cash' },
    destination: { name: 'name', email: 'email@zippy.cash' },
    fromAccount: 'Personal (8000 001 000000000) $1,747.46',
    amount: 0,
  },
};
