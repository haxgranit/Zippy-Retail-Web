import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import ZippyPageContainer from './ZippyPageContainer';

export default {
  title: 'common/ZippyPageContainer',
  component: ZippyPageContainer,
} as ComponentMeta<typeof ZippyPageContainer>;

const Template: ComponentStory<typeof ZippyPageContainer> = () => <ZippyPageContainer title="Test Title">child</ZippyPageContainer>;

export const Default = Template.bind({});
Default.args = {};
