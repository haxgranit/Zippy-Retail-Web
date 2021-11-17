import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import Business from "./Business";

export default {
  title: "Business",
  component: Business,
} as ComponentMeta<typeof Business>;

const Template: ComponentStory<typeof Business> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Business />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
