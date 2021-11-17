import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../index.css';
import Copyright from './Copyright';

export default {
  title: 'Copyright',
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = () => (
    <Copyright />
);

export const Default = Template.bind({});
Default.args = {};
