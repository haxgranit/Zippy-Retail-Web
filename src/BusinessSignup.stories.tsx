import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import BusinessSignup from "./BusinessSignup";

export default {
  title: "BusinessSignup",
  component: BusinessSignup,
} as ComponentMeta<typeof BusinessSignup>;

const Template: ComponentStory<typeof BusinessSignup> = () => (
  <BrowserRouter>
    <BusinessSignup />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
