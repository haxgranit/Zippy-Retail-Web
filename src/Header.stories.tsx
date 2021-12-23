import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderPure } from './Header';
import './i18n/config';
import './index.css';

export default {
  title: 'Header',
  component: HeaderPure,
} as ComponentMeta<typeof HeaderPure>;

const Template: ComponentStory<typeof HeaderPure> = ({
  isAuthenticated,
  isInProgress: canLogin,
  handleLogin,
  handleLogout,
}) => (
  <BrowserRouter>
    <HeaderPure
      isAuthenticated={isAuthenticated}
      isInProgress={canLogin}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  </BrowserRouter>
);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  isInProgress: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isAuthenticated: true,
};
