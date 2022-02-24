// eslint-disable-next-line import/prefer-default-export
export type ZippyCashTransaction = {
  id?: number,
  contactId: number,
  amount: number,
  isCredit: boolean,
  createdDate?: string,
  note?: string,
};
