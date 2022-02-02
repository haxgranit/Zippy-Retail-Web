import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import ContactSelector from './ContactSelector';

export default {
  title: 'common/ContactSelector',
  component: ContactSelector,
} as ComponentMeta<typeof ContactSelector>;

const Template: ComponentStory<typeof ContactSelector> = () => <ContactSelector />;

export const Default = Template.bind({});
Default.args = {};
