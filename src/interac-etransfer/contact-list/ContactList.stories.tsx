import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ContactList from './ContactList';

export default {
  title: 'interac-etransfer/contact-list/ContactList',
  component: ContactList,
} as ComponentMeta<typeof ContactList>;

const Template: ComponentStory<typeof ContactList> = () => <ContactList />;

export const Default = Template.bind({});
Default.args = {};
