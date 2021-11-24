import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import EditMyProfile from './EditMyProfile';

export default {
  title: 'interac-etransfer/edit-my-profile/EditMyProfile',
  component: EditMyProfile,
} as ComponentMeta<typeof EditMyProfile>;

const Template: ComponentStory<typeof EditMyProfile> = () => <EditMyProfile />;
export const Default = Template.bind({});
Default.args = {};
