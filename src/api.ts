/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';

export type Account = {
  name: string;
};

export type Contact = {
  name: string;
  email: string;
  phone: string;
};

export type User = {
  givenName: string;
  surname: number;
};

export default class Api {
  constructor(
    private readonly instance: IPublicClientApplication,
    private readonly account: AccountInfo,
  ) { }

  public listAccounts() {
    return this.fetch<Account[]>('get', 'Accounts');
  }

  public listContacts() {
    return this.fetch<Contact[]>('get', 'Contacts');
  }

  public putUser() {
    return this.fetch<User>('put', 'User');
  }

  private async fetch<TResponse>(method: string, path: string) {
    const accessTokenRequest = {
      scopes: ['https://zippycashdev.onmicrosoft.com/b0b070aa-4e90-4015-af46-59d0ceed5ecc/access_as_user'],
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

    const response = await fetch(`https://zippy-retail-api-dev.azurewebsites.net/${path}`, {
      method,
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    });

    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }

    return await response.json() as TResponse;
  }
}
