/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';

export type Account = {
  number: string;
};

export type Profile = {
  userObjectId: string;
  country: string;
};

export default class Api {
  constructor(
    private readonly instance: IPublicClientApplication,
    private readonly account: AccountInfo,
  ) { }

  public accounts() {
    return this.fetch<Account[]>('get', 'Accounts');
  }

  public profile() {
    return this.fetch<Profile>('get', 'Profile');
  }

  private async fetch<TResponse>(method: string, path: string) {
    const accessTokenRequest = {
      scopes: ['https://zippycashdev.onmicrosoft.com/6128490c-c59f-4323-9343-8d233c26a00c/access_as_user'],
      account: this.account,
    };

    let accessToken;
    try {
      const accessTokenResponse = await this.instance.acquireTokenSilent(accessTokenRequest);
      accessToken = accessTokenResponse.accessToken;
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        this.instance.acquireTokenRedirect(accessTokenRequest);
      }

      console.log(error);
      return null;
    }

    const response = await fetch(`https://zippy-accounts-dev.azurewebsites.net/${path}`, {
      method,
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    });

    return await response.json() as TResponse;
  }
}
