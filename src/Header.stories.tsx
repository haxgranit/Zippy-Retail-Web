import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderPure } from './Header';
import './i18n/config';
import './styles/index.scss';

export default {
  title: 'Header',
  component: HeaderPure,
} as ComponentMeta<typeof HeaderPure>;

const SampleData = {
  id: 12,
  name: '8000 335 000000012',
  balance: 1018.35,
};

const SampleUser = {
  email: 'sample@zippy.cash',
  firstName: 'Sample',
  lastName: 'Test',
  stateOrProvince: 'Ontario',
  signupIsBusiness: false,
};

const Template: ComponentStory<typeof HeaderPure> = ({
  account,
  user,
  isAuthenticated,
  isInProgress: canLogin,
  handleLogin,
  handleLogout,
}) => (
  <BrowserRouter>
    <HeaderPure
      account={account}
      isAuthenticated={isAuthenticated}
      isInProgress={canLogin}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      user={user}
    />
  </BrowserRouter>
);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  isInProgress: true,
  account: SampleData,
  user: SampleUser,
  isAuthenticated: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isInProgress: false,
  account: SampleData,
  user: SampleUser,
  isAuthenticated: true,
};
