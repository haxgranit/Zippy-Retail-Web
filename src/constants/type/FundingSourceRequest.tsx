// eslint-disable-next-line import/prefer-default-export
import { BankAccount } from './BankAccount';

export type FundingSourceRequest = {
  displayName: string,
  isDefault: boolean,
  bankAccount: BankAccount,
};
