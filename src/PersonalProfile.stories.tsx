import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './i18n/config';
import './index.css';
import PersonalProfile from './PersonalProfile';

export default {
  title: 'PersonalProfile',
  component: PersonalProfile,
} as ComponentMeta<typeof PersonalProfile>;

const Template: ComponentStory<typeof PersonalProfile> = () => (
  <BrowserRouter>
    <PersonalProfile />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
