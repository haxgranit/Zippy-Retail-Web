import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { store } from './app/store';
import './i18n/config';
import './index.css';
import BusinessSignup from './BusinessSignup';

export default {
  title: 'BusinessSignup',
  component: BusinessSignup,
} as ComponentMeta<typeof BusinessSignup>;

const Template: ComponentStory<typeof BusinessSignup> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <BusinessSignup />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
