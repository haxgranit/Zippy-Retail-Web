/* eslint-disable no-console */

import { AccountInfo, IPublicClientApplication } from '@azure/msal-browser';

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

export async function getToken()
  : Promise<string | null> {  
  return 'token';
}
export default class Api {
  constructor(
    private readonly instance: IPublicClientApplication,
    private readonly account: AccountInfo,
  ) { }

  public listAccounts() {
    return this.fetch<Account[]>();
  }

  public listContacts() {
    return this.fetch<Contact[]>();
  }

  public putUser() {
    return this.fetch<User>();
  }

  private async fetch<TResponse>() {
     
    return {} as TResponse;
  }
}
