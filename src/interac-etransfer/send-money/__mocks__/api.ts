/* eslint-disable no-console */

import { AccountInfo, IPublicClientApplication } from '@azure/msal-browser';

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
    return this.fetch('get', 'Accounts');
  }

  public listContacts() {
    return this.fetch('get', 'Contacts');
  }

  public putUser() {
    return this.fetch('put', 'User');
  }

  private async fetch(method: string, path: string) {
    return { instance: this.instance, url: `${method}/${path}` };
  }
}
