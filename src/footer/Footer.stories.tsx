import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../i18n/config";
import "../index.css";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
