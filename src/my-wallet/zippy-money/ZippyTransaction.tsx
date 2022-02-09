import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { SendMoneyStepsEnum } from '../../constants/enum/SendMoneyStepsEnum';
import Api, {
  Account,
  Contact,
  InteracEtransferTransaction,
  Transaction,
  User,
} from '../../api';
import { TransactionMainDetailsInterface } from '../../constants/interface/TransactionMainDetailsInterface';
import { TransactionTypeEnum } from '../../constants/enum/TransactionTypeEnum';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import TransactionStart from './TransactionStart/TransactionStart';
import TransactionDetails from './TransactionDetails/TransactionDetails';
import TransactionStatus from './TransactionStatus/TransactionStatus';
import TransactionSecurityQuestions from './TransactionSecurityQuestions/TransactionSecurityQuestions';
import TransactionComplete from './TransactionComplete/TransactionComplete';
import { TunnelTypeEnum } from '../../constants/enum/TunnelTypeEnum';

export default function ZippyTransaction() {
  const { user } = useAppSelector(selectUser);

  const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
  } as User;

  const initialContact = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  } as Contact;

  const initialMainInfo = {
    amount: 0,
    destination: { email: '', name: '' },
    source: { email: '', name: '' },
    fromAccount: '',
    message: '',
    transferMethod: 'Email',
    securityAnswer: '',
    confirmSecurityAnswer: '',
    securityQuestion: '',
    showAnswer: false,
  } as TransactionMainDetailsInterface;

  const navigate = useNavigate();
  const { step, transactionType = TransactionTypeEnum.SEND, transactionId } = useParams();
  const { instance, accounts } = useMsal();
  const [tunnelType, setTunnelType] = useState<TunnelTypeEnum>(TunnelTypeEnum.INTERAC_E_TRANSFER);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<Contact>(initialContact);
  const [selectedAccount, setSelectedAccount] = useState<Account>({} as Account);
  const [accountsList, setAccountsList] = useState<Array<Account>>([]);
  const [contactList, setContactList] = useState<Array<Contact>>([]);
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);
  const [transId, setTransId] = useState<number>(Number(transactionId));
  const [userState, setUserState] = useState<User>(initialUser);
  const [
    mainInfo, setMainInfo,
  ] = useState<TransactionMainDetailsInterface>(JSON.parse(JSON.stringify(initialMainInfo)));

  const loadTransaction = (id: number) => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransaction(id)
      .then((data) => setTransaction(data));
  };

  const resetMainInfo = () => {
    setSelectedContact(initialContact);
    setSelectedAccount({} as Account);
    setTunnelType(TunnelTypeEnum.INTERAC_E_TRANSFER);
    setMainInfo(JSON.parse(JSON.stringify(initialMainInfo)));
    navigate(`/my-wallet/zippy-money/${transactionType}/transaction-start`, {
      state: {
        selectedContact: 0,
        selectedAccount: 0,
        mainInfo: JSON.parse(JSON.stringify(initialMainInfo)),
      },
    });
  };

  const postInteractTransaction = (data: InteracEtransferTransaction) => {
    new Api(instance, accounts[0])
      .postInteracEtransferTransaction(data)
      .then((res: InteracEtransferTransaction) => {
        setErrorMessage('');
        setTransId(Number(res.id));
        loadTransaction(Number(res.id));
        navigate(`/my-wallet/zippy-money/${transactionType}/transaction-status/${res.id}`);
      })
      .catch(() => setErrorMessage('Transfer failed.'))
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const handleTriggerTransaction = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      const data: InteracEtransferTransaction = {
        contactId: selectedContact.id,
        amount: mainInfo.amount,
        type: transactionType,
        securityQuestion: mainInfo.securityQuestion,
        securityAnswer: mainInfo.securityAnswer,
      };
      if (transactionType === TransactionTypeEnum.REQUEST) {
        delete data.securityQuestion;
        delete data.securityAnswer;
        postInteractTransaction(data);
      } else if (mainInfo.securityQuestion && mainInfo.securityAnswer) {
        postInteractTransaction(data);
      } else {
        new Api(instance, accounts[0])
          .postDirectDepositStatus(contactList[0].email)
          .then((res) => {
            if (res) {
              postInteractTransaction(data);
            } else {
              setIsProcessing(false);
              navigate(`/my-wallet/zippy-money/${transactionType}/${SendMoneyStepsEnum.TRANSACTION_SECURITY_QUESTIONS}`);
            }
          })
          .catch(() => setErrorMessage('Transfer failed'))
          .finally(() => {
            setIsProcessing(false);
          });
      }
    }
  };

  useEffect(() => {
    setUserState(user || initialUser);
    if (transId) {
      loadTransaction(Number(transId));
    }

    new Api(instance, accounts[0])
      .listAccounts()
      .then((result: Array<Account>) => setAccountsList(result))
      .catch(() => {
        setErrorMessage('Sorry! a problem has occurred when getting accounts.');
      });

    new Api(instance, accounts[0])
      .listContacts()
      .then((result: Array<Contact>) => setContactList(result))
      .catch(() => {
        setErrorMessage('Sorry! a problem has occurred when getting contacts.');
      });
  }, []);

  return (
    <>
      {(() => {
        switch (step) {
          case SendMoneyStepsEnum.TRANSACTION_DETAILS:
            return (
              <TransactionDetails
                user={userState}
                transaction={transaction}
                transactionType={transactionType as TransactionTypeEnum}
                resetMainInfo={resetMainInfo}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_SECURITY_QUESTIONS:
            return (
              <TransactionSecurityQuestions
                mainInfo={mainInfo}
                setMainInfo={setMainInfo}
                handleTriggerTransaction={handleTriggerTransaction}
                isProcessing={isProcessing}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_STATUS:
            return (
              <TransactionStatus
                user={userState}
                transaction={transaction}
                transactionType={transactionType as TransactionTypeEnum}
                resetMainInfo={resetMainInfo}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_COMPLETE:
            return (
              <TransactionComplete
                transactionType={transactionType as TransactionTypeEnum}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_START:
            return (
              <TransactionStart
                contactList={contactList}
                accountsList={accountsList}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
                selectedAccount={selectedAccount}
                setSelectedAccount={setSelectedAccount}
                transactionType={transactionType as TransactionTypeEnum}
                handleTriggerTransaction={handleTriggerTransaction}
                isProcessing={isProcessing}
                errorMessage={errorMessage}
                mainInfo={mainInfo}
                setMainInfo={setMainInfo}
                step={SendMoneyStepsEnum.TRANSACTION_START}
                tunnelType={tunnelType}
                setTunnelType={setTunnelType}
              />
            );
          default:
            return (
              <TransactionComplete
                transactionType={transactionType as TransactionTypeEnum}
              />
            );
        }
      })()}
    </>
  );
}
