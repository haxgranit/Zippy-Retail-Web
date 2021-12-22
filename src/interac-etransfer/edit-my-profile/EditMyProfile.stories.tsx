import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import { EditMyProfilePure } from './EditMyProfile';

export default {
  title: 'interac-etransfer/edit-my-profile/EditMyProfile',
  component: EditMyProfilePure,
} as ComponentMeta<typeof EditMyProfilePure>;

const Template: ComponentStory<typeof EditMyProfilePure> = (args) => {
  const { user } = args;
  return <EditMyProfilePure user={user} />;
};

export const Default = Template.bind({});
Default.args = {
  user: {
    email: 'john.doe@email.com',
    firstName: 'John',
    lastName: 'Doe',
  },
};
