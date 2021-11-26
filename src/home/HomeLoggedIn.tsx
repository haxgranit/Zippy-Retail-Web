/* eslint-disable no-console */

import { InteractionRequiredAuthError, InteractionStatus } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AccountPlaceholders from './AccountPlaceholders';
import HorizontalNavLinks from './HorizontalNavLinks';
import VerticalNavLinks from './VerticalNavLinks';

export default function HomeLoggedIn() {
  const { instance, inProgress, accounts: msalAccounts } = useMsal();
  const [account, setAccount] = useState<any>(null);

  const getOrCreateAccount = (accessToken: string) => {
    const url = 'https://zippy-accounts-dev.azurewebsites.net/Accounts';
    const headers = new Headers({ Authorization: `Bearer ${accessToken}` });
    return fetch(url, {
      method: 'get',
      headers,
    })
      .then((response) => response.json())
      .then((accounts) => {
        if (!accounts.length) {
          return fetch(url, {
            method: 'post',
            headers,
          })
            .then((response) => response.json());
        }
        return accounts[0];
      });
  };

  useEffect(() => {
    const accessTokenRequest = {
      scopes: ['https://zippycashdev.onmicrosoft.com/6128490c-c59f-4323-9343-8d233c26a00c/access_as_user'],
      account: msalAccounts[0],
    };
    if (!account && inProgress === InteractionStatus.None) {
      instance.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
        // Acquire token silent success
        const { accessToken } = accessTokenResponse;
        // Call your API with token
        getOrCreateAccount(accessToken).then((acc) => { setAccount(acc); });
      }).catch((error) => {
        if (error instanceof InteractionRequiredAuthError) {
          instance.acquireTokenRedirect(accessTokenRequest);
        }
        console.log(error);
      });
    }
  }, [instance, msalAccounts, inProgress, account]);

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <div className="row">
        <div className="col-12">
          <pre>{JSON.stringify(account, null, 4)}</pre>
        </div>
      </div>
      <div className="row">
        <div className="col-2" />
        <div className="col-10">
          <HorizontalNavLinks />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <VerticalNavLinks />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
        <div className="col-2">
          <AccountPlaceholders />
        </div>
      </div>
    </div>
  );
}
