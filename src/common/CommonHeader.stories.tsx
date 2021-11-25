import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../index.css';
import CommonHeader from './CommonHeader';

export default {
  title: 'common/CommonHeader',
  component: CommonHeader,
} as ComponentMeta<typeof CommonHeader>;

const Template: ComponentStory<typeof CommonHeader> = () => <CommonHeader title="Test Title" print />;

export const Default = Template.bind({});
Default.args = {};
