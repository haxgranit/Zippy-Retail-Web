import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../index.css';
import EbillsEmailNotification from './EbillsEmailNotification';

export default {
  title: 'customer-services/ebills-email-notification/EbillsEmailNotification',
  component: EbillsEmailNotification,
} as ComponentMeta<typeof EbillsEmailNotification>;

const Template: ComponentStory<typeof EbillsEmailNotification> = () => (
  <BrowserRouter>
    <EbillsEmailNotification />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
