import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './i18n/config';
import './index.css';
import About from './About';

export default {
  title: 'About',
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => (
  <BrowserRouter>
    <About />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
