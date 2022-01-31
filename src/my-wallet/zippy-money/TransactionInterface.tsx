import { Dispatch, SetStateAction } from 'react';
import { TransactionTypeEnum } from './TransactionTypeEnum';
import { SendMoneyStepsEnum } from './SendMoneyStepsEnum';
import { TransferMainDetails } from '../../interac-etransfer/send-money/SendMoney';
import { TransactionMainDetailsInterface } from './TransactionMainDetailsInterface';
import {
  Account,
  Contact,
  Transaction,
  User,
} from '../../api';
import { TunnelTypeEnum } from './TunnelTypeEnum';

export interface TransactionInterface {
  contactList: Array<Contact>;
  accountsList: Array<Account>;
  step: SendMoneyStepsEnum;
  transactionType: TransactionTypeEnum;
  handleTriggerTransaction: any;
  isProcessing: boolean,
  errorMessage: string,
  mainInfo: TransactionMainDetailsInterface;
  setMainInfo: Dispatch<SetStateAction<TransferMainDetails>>;
  resetMainInfo?: () => void;
  selectedAccount: number;
  setSelectedAccount: Dispatch<SetStateAction<number>>;
  selectedContact : number;
  setSelectedContact: Dispatch<SetStateAction<number>>;
  user?: User;
  transaction?: Transaction;
  transactionId?: number;
  tunnelType?: TunnelTypeEnum;
  setTunnelType: Dispatch<SetStateAction<TunnelTypeEnum>>;
}
