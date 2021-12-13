/* eslint-disable no-console */

import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication,
} from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n/config';
import './index.css';
import App from './App';
import { msalConfig } from './authConfig';
import * as serviceWorker from './serviceWorker';
import Api from './api';

const msalInstance = new PublicClientApplication(msalConfig);
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const { account } = payload;
    if (account) {
      const api = new Api(msalInstance, account);
      api.putUser()
        .then((user) => console.log('user', user))
        .catch((error) => console.log('error', error));
      msalInstance.setActiveAccount(account);
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
