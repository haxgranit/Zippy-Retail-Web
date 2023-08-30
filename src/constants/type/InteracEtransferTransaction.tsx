// eslint-disable-next-line import/prefer-default-export
export type InteracEtransferTransaction = {
  id?: number,
  contactId: number,
  amount: number,
  type: string,
  securityQuestion?: string,
  securityAnswer?: string,
};
