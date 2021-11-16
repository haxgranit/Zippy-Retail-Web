import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import { store } from './app/store';
import './i18n/config';
import './index.css';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
