import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import Business from "./Business";

export default {
  title: "Business",
  component: Business,
} as ComponentMeta<typeof Business>;

const Template: ComponentStory<typeof Business> = () => (
  <BrowserRouter>
    <Business />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
