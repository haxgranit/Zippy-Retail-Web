// eslint-disable-next-line import/prefer-default-export
import { BankAccount } from './BankAccount';

export type FundingSource = {
  id:number,
  displayName: string,
  isDefault: boolean,
  bankAccount: BankAccount | null,
};
