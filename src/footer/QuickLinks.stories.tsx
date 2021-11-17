import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../i18n/config";
import "../index.css";
import QuickLinks from "./QuickLinks";

export default {
  title: "QuickLinks",
  component: QuickLinks,
} as ComponentMeta<typeof QuickLinks>;

const Template: ComponentStory<typeof QuickLinks> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <QuickLinks />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
