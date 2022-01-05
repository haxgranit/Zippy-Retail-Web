import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import AccountPlaceholders from './AccountPlaceholders';

export default {
  title: 'AccountPlaceholders',
  component: AccountPlaceholders,
} as ComponentMeta<typeof AccountPlaceholders>;

const Template: ComponentStory<typeof AccountPlaceholders> = () => <AccountPlaceholders />;

export const Default = Template.bind({});
Default.args = {};
