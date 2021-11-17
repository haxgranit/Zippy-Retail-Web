import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./i18n/config";
import "./index.css";
import PersonalSignup from "./PersonalSignup";

export default {
  title: "PersonalSignup",
  component: PersonalSignup,
} as ComponentMeta<typeof PersonalSignup>;

const Template: ComponentStory<typeof PersonalSignup> = () => (
  <BrowserRouter>
    <PersonalSignup />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
