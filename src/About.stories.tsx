import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import About from "./About";

export default {
  title: "About",
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <About />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
