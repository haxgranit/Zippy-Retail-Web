// eslint-disable-next-line import/prefer-default-export
import { TransactionStatusEnum } from '../enum/TransactionStatusEnum';
import { DirectionTypeEnum } from '../enum/DirectionTypeEnum';
import { MethodTypeEnum } from '../enum/MethodTypeEnum';
import { Contact } from './Contact';
import { FundingSource } from './FundingSource';

export type Transaction = {
  status: TransactionStatusEnum;
  id: number;
  direction: DirectionTypeEnum;
  method: MethodTypeEnum;
  contact: Contact;
  fundingSource: FundingSource;
  amount: number;
  date: string;
  expireDate: string;
  securityQuestion?: string;
  securityAnswer?: string;
  type?: string;
  createdDate: string;
};
