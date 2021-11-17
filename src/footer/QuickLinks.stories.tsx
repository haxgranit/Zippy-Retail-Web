import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../i18n/config";
import "../index.css";
import QuickLinks from "./QuickLinks";

export default {
  title: "QuickLinks",
  component: QuickLinks,
} as ComponentMeta<typeof QuickLinks>;

const Template: ComponentStory<typeof QuickLinks> = () => (
  <BrowserRouter>
    <QuickLinks />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
