import { ComponentStory, ComponentMeta } from '@storybook/react';
import IdentityVerificationModal, {
  IdentityVerificationModalProps,
} from './IdentityVerificationModal';

export default {
  title: 'interac-etransfer/contact-list/edit/IdentityVerificationModal',
  component: IdentityVerificationModal,
} as ComponentMeta<typeof IdentityVerificationModal>;

const Template: ComponentStory<typeof IdentityVerificationModal> = ({
  show,
  handleClose,
}: IdentityVerificationModalProps) => (
  <IdentityVerificationModal
    show={show}
    handleClose={handleClose}
    selectedContact={{}}
  />
);
export const Default = Template.bind({});
