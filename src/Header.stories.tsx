import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import './i18n/config';
import './index.css';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
