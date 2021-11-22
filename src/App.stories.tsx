import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from './App';
import './i18n/config';
import './index.css';

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
