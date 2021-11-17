import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import PersonalSignup from "./PersonalSignup";

export default {
  title: "PersonalSignup",
  component: PersonalSignup,
} as ComponentMeta<typeof PersonalSignup>;

const Template: ComponentStory<typeof PersonalSignup> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersonalSignup />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
