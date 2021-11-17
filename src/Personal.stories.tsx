import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import Personal from "./Personal";

export default {
  title: "Personal",
  component: Personal,
} as ComponentMeta<typeof Personal>;

const Template: ComponentStory<typeof Personal> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Personal />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
