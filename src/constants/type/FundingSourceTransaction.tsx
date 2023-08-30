// eslint-disable-next-line import/prefer-default-export
import { DCBankEftTransaction } from './DCBankEftTransaction';
import { FundingSource } from './FundingSource';

export type FundingSourceTransaction = {
  id:number,
  fundingSourceId:number,
  amount: number,
  isCredit: boolean,
  createdDate: string,
  status: string
  DCBankEftTransaction: DCBankEftTransaction,
  fundingSource: FundingSource
};
