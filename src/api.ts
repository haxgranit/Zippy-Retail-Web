/* eslint-disable class-methods-use-this */
import {
  AccountInfo,
  InteractionRequiredAuthError,
  IPublicClientApplication,
} from '@azure/msal-browser';
import { TransferTypeEnum } from './constants/enum/TransferTypeEnum';
import { Account } from './constants/type/Account';
import { Contact } from './constants/type/Contact';
import { ContactBase } from './constants/type/ContactBase';
import { User } from './constants/type/User';
import { InteracEtransferTransaction } from './constants/type/InteracEtransferTransaction';
import { Transaction } from './constants/type/Transaction';
import { ZippyCashTransaction } from './constants/type/ZippyCashTransaction';
import { VersionResponse } from './constants/type/VersionResponse';
import { ErrorDetail } from './constants/type/ErrorDetail';
import { FundingSource } from './constants/type/FundingSource';
import { FundingSourceTransactionRequest } from './constants/type/FundingSourceTransactionRequest';
import { FundingSourceRequest } from './constants/type/FundingSourceRequest';
import { FundingSourceTransaction } from './constants/type/FundingSourceTransaction';
import { FundingSourceTransactionResponse } from './constants/type/FundingSourceTransactionResponse';
import CustomError from './custom-error';

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
      await instance.acquireTokenRedirect(accessTokenRequest);
    }
    /* eslint-disable no-console */
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

  public listFundingSources() {
    return this.fetch<FundingSource[]>('get', 'FundingSources');
  }

  public postFundingSource(request: FundingSourceRequest) {
    return this.fetch<FundingSource[]>('post', 'FundingSources', request);
  }

  public postFundingSourceTransaction(request: FundingSourceTransactionRequest, id: number) {
    return this.fetch<FundingSourceTransactionResponse>('post', `FundingSources/${id}/Transactions/`, request);
  }

  public getFundingSourceTransaction(id: number, sourceId: number) {
    return this.fetch<FundingSourceTransaction>('get', `FundingSources/${sourceId}/Transactions/${id}`);
  }

  public postContact(data: ContactBase) {
    return this.fetch<Contact>('post', 'Contacts', data);
  }

  public putUser() {
    return this.fetch<User>('put', 'User');
  }

  public getInteracEtransferTransactions(type: TransferTypeEnum) {
    if (type === TransferTypeEnum.ALL) {
      return this.fetch<Transaction[]>('get', 'InteracEtransfer/Transactions');
    }
    return this.fetch<Transaction[]>('get', `InteracEtransfer/Transactions?type=${type}`);
  }

  public getInteracEtransferTransaction(transactionId: number) {
    return this.fetch<Transaction>('get', `InteracEtransfer/Transactions/${transactionId}`);
  }

  public getInteracEtransferCancelTransaction(transactionId: number) {
    return this.fetch<Transaction>('post', `InteracEtransfer/Transactions/${transactionId}/Cancel`);
  }

  public getInteracEtransferSendReminder(transactionId: number) {
    return this.fetch<Transaction>('post', `InteracEtransfer/Transactions/${transactionId}/Remind`);
  }

  public postInteracEtransferTransaction(data: InteracEtransferTransaction) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/Transactions', data);
  }

  public postDirectDepositStatus(email: string) {
    return this.fetch<InteracEtransferTransaction>('post', 'InteracEtransfer/DirectDepositStatus', { email });
  }

  public getTransfer(transactionId: number) {
    return this.fetch<Transaction>('get', `Transfers/${transactionId}`);
  }

  public getTransfers(type: TransferTypeEnum) {
    if (type === TransferTypeEnum.ALL) {
      return this.fetch<Transaction[]>('get', 'Transfers');
    }
    return this.fetch<Transaction[]>('get', `Transfers?type=${type}`);
  }

  public postZippyCashTransfer(data: ZippyCashTransaction) {
    return this.fetch<ZippyCashTransaction>('post', 'Transfers', data);
  }

  public getVersion() {
    return this.fetch<VersionResponse>('get', 'Version');
  }

  private async fetch<TResponse>(method: string, path: string, body?: any) {
    const apiUrl = (<any>window).API_URL;
    if (!apiUrl) {
      throw new CustomError('window.API_URL is undefined');
    }

    const request: RequestInit = {
      method,
      body: body ? JSON.stringify(body) : null,
    };

    if (path !== 'Version') {
      const accessToken = await getToken(this.instance, this.account);
      request.headers = new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      });
    }

    const response = await fetch(`${apiUrl}/${path}`, request);
    // TODO: proper error output here
    if (!response.ok) {
      const error = await response.json() as ErrorDetail;
      throw new CustomError(error.title, error);
    }
    return (response.status !== 204 ? await response.json() : {}) as TResponse;
  }
}
