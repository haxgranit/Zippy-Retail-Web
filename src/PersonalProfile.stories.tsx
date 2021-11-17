import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import PersonalProfile from "./PersonalProfile";

export default {
  title: "PersonalProfile",
  component: PersonalProfile,
} as ComponentMeta<typeof PersonalProfile>;

const Template: ComponentStory<typeof PersonalProfile> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersonalProfile />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
