import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import EditContact from './EditContact';

export default {
  title: 'interac-etransfer/contact-list/edit/EditContact',
  component: EditContact,
} as ComponentMeta<typeof EditContact>;

const Template: ComponentStory<typeof EditContact> = () => (
  <BrowserRouter>
    <EditContact />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
