import { TransactionMainDetailsInterface } from '../constants/interface/TransactionMainDetailsInterface';

const MAIN_INFO: TransactionMainDetailsInterface = {
  amount: 1000,
  destination: { email: 'destination@email.com', name: 'destination name' },
  source: { email: 'source@email.com', name: 'source name' },
  fromAccount: 'fromAccount (8000 0000 00000000)',
  message: 'message',
  transferMethod: 'Email',
  securityAnswer: 'security Answer',
  confirmSecurityAnswer: 'security Answer',
  securityQuestion: 'security Question',
  showAnswer: true,
};

export default MAIN_INFO;
