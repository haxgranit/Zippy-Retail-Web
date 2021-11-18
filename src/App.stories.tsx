import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from './App';
import { store } from './app/store';
import './i18n/config';
import './index.css';

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
