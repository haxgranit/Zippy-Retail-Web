import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import Legal from "./Legal";

export default {
  title: "Legal",
  component: Legal,
} as ComponentMeta<typeof Legal>;

const Template: ComponentStory<typeof Legal> = () => (
  <BrowserRouter>
    <Legal />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
