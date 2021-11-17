import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../i18n/config";
import "../index.css";
import HomeLoggedOut from "./HomeLoggedOut";

export default {
  title: "HomeLoggedOut",
  component: HomeLoggedOut,
} as ComponentMeta<typeof HomeLoggedOut>;

const Template: ComponentStory<typeof HomeLoggedOut> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <HomeLoggedOut />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
