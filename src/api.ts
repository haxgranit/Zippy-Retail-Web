/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';

export enum TransferType {
  SEND = 'send',
  RECEIVE = 'receive',
  REQUEST = 'request',
}

export type Account = {
  id: number,
  name: string;
  email: string;
};

export type Contact = {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
};

export type Transaction = {
  id: number;
  contact: Contact;
  amount: number;
  date: string;
  securityQuestion?: string;
  securityAnswer?: string;
};

export type InteracEtransferTransaction = {
  contactId: number,
  amount: number,
  type: string,
  id?: number,
  securityQuestion?: string,
  securityAnswer?: string,
};

type ProblemDetail = {
  type: string,
  title: string,
  status: number,
  traceId: string,
};

export async function getToken(instance: IPublicClientApplication, account: AccountInfo)
  : Promise<string | null> {
  const accessTokenRequest = {
    scopes: ['https://zippycashdev.onmicrosoft.com/b0b070aa-4e90-4015-af46-59d0ceed5ecc/access_as_user'],
    account,
  };

  let accessToken;
  try {
    const accessTokenResponse = await instance.acquireTokenSilent(accessTokenRequest);
    accessToken = accessTokenResponse.accessToken;
    return accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      instance.acquireTokenRedirect(accessTokenRequest);
    }
    console.log(error);
  }
  return null;
}
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

  public getInteracEtransferTransactions(type: TransferType) {
    return this.fetch<Transaction[]>('get', `InteracEtransfer/Transactions?type=${type}`);
  }

  public getInteracEtransferTransaction(transactionId: number) {
    return this.fetch<Transaction>('get', `InteracEtransfer/Transactions/${transactionId}`);
  }

  public postInteracEtransferTransaction(data: InteracEtransferTransaction) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/Transactions', data);
  }

  public postDirectDepositStatus(email: string) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/DirectDepositStatus', { email });
  }

  private async fetch<TResponse>(method: string, path: string, body?: any) {
    const apiUrl = (<any>window).API_URL;
    if (!apiUrl) {
      throw Error('window.API_URL is undefined');
    }
    const accessToken = await getToken(this.instance, this.account);
    const response = await fetch(`${apiUrl}/${path}`, {
      method,
      headers: new Headers(
        {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      ),
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const responseText = await response.text();
      if (responseText) {
        const problemDetail = JSON.parse(responseText) as ProblemDetail;
        throw Error(problemDetail.title);
      } else {
        throw Error('No Response');
      }
    }

    return await response.json() as TResponse;
  }
}
