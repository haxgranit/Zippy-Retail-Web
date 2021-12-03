/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';

export type Region = {
  id: number;
  regionCode: string;
  name: string;
  countryId: number;
};

export default class Api {
  constructor(
    private readonly instance: IPublicClientApplication,
    private readonly account: AccountInfo,
  ) { }

  public getRegions() {
    return this.fetch<Region>('get', 'Region');
  }

  private async fetch<TResponse>(method: string, path: string) {
    const accessTokenRequest = {
      scopes: ['https://zippycashdev.onmicrosoft.com/0f2b00c3-dc2e-4ce6-ab2b-f4830c77a432/api'],
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

    const response = await fetch(`https://zippy-cash-api-dev.azurewebsites.net/api/v1/${path}`, {
      method,
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    });

    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }

    return await response.json() as TResponse;
  }
}
