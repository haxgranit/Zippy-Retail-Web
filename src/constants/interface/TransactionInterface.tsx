import { Dispatch, SetStateAction } from 'react';
import { TransactionTypeEnum } from '../enum/TransactionTypeEnum';
import { SendMoneyStepsEnum } from '../enum/SendMoneyStepsEnum';
import { TransactionMainDetailsInterface } from './TransactionMainDetailsInterface';
import {
  Account,
  Contact,
  Transaction,
  User,
} from '../../api';
import { TransactionMethodTypeEnum } from '../enum/TransactionMethodTypeEnum';

export interface TransactionInterface {
  contactList: Array<Contact>;
  setContactList: Dispatch<SetStateAction<Array<Contact>>>,
  accountsList: Array<Account>;
  step: SendMoneyStepsEnum;
  transactionType: TransactionTypeEnum;
  handleTriggerTransaction: any;
  isProcessing: boolean,
  errorMessage: string,
  mainInfo: TransactionMainDetailsInterface;
  setMainInfo: Dispatch<SetStateAction<TransactionMainDetailsInterface>>;
  resetMainInfo?: () => void;
  selectedAccount: Account;
  setSelectedAccount: Dispatch<SetStateAction<Account>>;
  selectedContact : Contact;
  setSelectedContact: Dispatch<SetStateAction<Contact>>;
  user?: User;
  transaction?: Transaction;
  transactionId?: number;
  transactionMethod?: TransactionMethodTypeEnum;
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>,
}
