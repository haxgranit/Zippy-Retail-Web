/* eslint-disable no-console */

import { AccountInfo, InteractionRequiredAuthError, IPublicClientApplication } from '@azure/msal-browser';

export type Profile = {
  userObjectId: string;
  country: string;
};

export const fetchProfile = async (instance: IPublicClientApplication, account: AccountInfo) => {
  const accessTokenRequest = {
    scopes: ['https://zippycashdev.onmicrosoft.com/6128490c-c59f-4323-9343-8d233c26a00c/access_as_user'],
    account,
  };

  try {
    const accessTokenResponse = await instance.acquireTokenSilent(accessTokenRequest);
    const profileResponse = await fetch('https://zippy-accounts-dev.azurewebsites.net/Profile', {
      method: 'get',
      headers: new Headers({ Authorization: `Bearer ${accessTokenResponse.accessToken}` }),
    });

    return await profileResponse.json() as Profile;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      instance.acquireTokenRedirect(accessTokenRequest);
    }

    console.log(error);
    return null;
  }
};
