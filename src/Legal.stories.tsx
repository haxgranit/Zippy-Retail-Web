import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import Legal from "./Legal";

export default {
  title: "Legal",
  component: Legal,
} as ComponentMeta<typeof Legal>;

const Template: ComponentStory<typeof Legal> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Legal />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
