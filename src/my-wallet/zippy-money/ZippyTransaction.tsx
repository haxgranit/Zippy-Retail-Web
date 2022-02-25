import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { SendMoneyStepsEnum } from '../../constants/enum/SendMoneyStepsEnum';
import Api from '../../api';
import { TransactionMainDetailsInterface } from '../../constants/interface/TransactionMainDetailsInterface';
import { TransactionTypeEnum } from '../../constants/enum/TransactionTypeEnum';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import TransactionStart from './TransactionStart/TransactionStart';
import TransactionDetails from './TransactionDetails/TransactionDetails';
import TransactionStatus from './TransactionStatus/TransactionStatus';
import TransactionSecurityQuestions from './TransactionSecurityQuestions/TransactionSecurityQuestions';
import TransactionComplete from './TransactionComplete/TransactionComplete';
import { TransactionMethodTypeEnum } from '../../constants/enum/TransactionMethodTypeEnum';
import { Account } from '../../constants/type/Account';
import { Contact } from '../../constants/type/Contact';
import { Transaction } from '../../constants/type/Transaction';
import { InteracEtransferTransaction } from '../../constants/type/InteracEtransferTransaction';
import { ZippyCashTransaction } from '../../constants/type/ZippyCashTransaction';

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

export default function ZippyTransaction() {
  const { user } = useAppSelector(selectUser);
  const navigate = useNavigate();
  const {
    transactionMethod = TransactionMethodTypeEnum.ZIPPY_CASH,
    step = SendMoneyStepsEnum.TRANSACTION_START,
    transactionType = TransactionTypeEnum.SEND,
    transactionId,
  } = useParams();
  const { instance, accounts } = useMsal();
  const api = new Api(instance, accounts[0]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<Contact>(initialContact);
  const [selectedAccount, setSelectedAccount] = useState<Account>({} as Account);
  const [accountsList, setAccountsList] = useState<Array<Account>>([]);
  const [contactList, setContactList] = useState<Array<Contact>>([]);
  const [transaction, setTransaction] = useState<Transaction>();
  const [transId, setTransId] = useState<number>(Number(transactionId));
  const [note, setNote] = useState<string>('');
  const [
    mainInfo, setMainInfo,
  ] = useState<TransactionMainDetailsInterface>(JSON.parse(JSON.stringify(initialMainInfo)));

  const loadTransaction = (id: number) => {
    api.getTransfer(id)
      .then((data: Transaction) => {
        setTransaction(data);
      });
  };

  const resetMainInfo = () => {
    setErrorMessage('');
    setSelectedContact(initialContact);
    setSelectedAccount({} as Account);
    setMainInfo(JSON.parse(JSON.stringify(initialMainInfo)));
    navigate(`/my-wallet/zippy-money/${transactionMethod}/${transactionType}/transaction-start`, {
      state: {
        errorMessage: '',
        selectedContact: 0,
        selectedAccount: 0,
        mainInfo: JSON.parse(JSON.stringify(initialMainInfo)),
      },
    });
  };

  const postInteractTransaction = (data: InteracEtransferTransaction) => {
    api.postInteracEtransferTransaction(data)
      .then((res: InteracEtransferTransaction) => {
        setErrorMessage('');
        setTransId(Number(res.id));
        loadTransaction(Number(res.id));
        navigate(`/my-wallet/zippy-money/${transactionMethod}/${transactionType}/transaction-status/${res.id}`);
      })
      .catch(() => {
        setErrorMessage('Transfer failed');
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const interactTransaction = (data: InteracEtransferTransaction) => {
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
            navigate(`/my-wallet/zippy-money/${transactionMethod}/${transactionType}/${SendMoneyStepsEnum.TRANSACTION_SECURITY_QUESTIONS}`);
          }
        })
        .catch(() => {
          setErrorMessage('Transfer failed');
        })
        .finally(() => {
          setIsProcessing(false);
        });
    }
  };

  const zippyCashTransaction = (data: ZippyCashTransaction) => {
    api.postZippyCashTransfer(data)
      .then((res: ZippyCashTransaction) => {
        setErrorMessage('');
        setTransId(Number(res.id));
        loadTransaction(Number(res.id));
        navigate(`/my-wallet/zippy-money/${transactionMethod}/${transactionType}/transaction-status/${res.id}`);
      })
      .catch(() => {
        setErrorMessage('Transfer failed');
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const safeText = (unsafeText: string): string => unsafeText.replace(
    /(<([^>]+)>)/g,
    (c) => `&#${(`000${c.charCodeAt(0)}`).slice(-4)};`,
  );

  const handleTriggerTransaction = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      if (transactionMethod === TransactionMethodTypeEnum.INTERAC_E_TRANSFER) {
        interactTransaction({
          contactId: selectedContact.id,
          amount: mainInfo.amount,
          type: transactionType,
          note: safeText(note),
          securityQuestion: mainInfo.securityQuestion,
          securityAnswer: mainInfo.securityAnswer,
        } as InteracEtransferTransaction);
      } else if (transactionMethod === TransactionMethodTypeEnum.ZIPPY_CASH) {
        zippyCashTransaction({
          contactId: selectedContact.id,
          amount: mainInfo.amount,
          isCredit: !!TransactionTypeEnum.SEND,
          note: safeText(note),
        } as ZippyCashTransaction);
      }
    }
  };

  useEffect(() => {
    if (user) {
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

      if (transId) {
        loadTransaction(Number(transId));
      }
    }
  }, [user]);

  return (
    <>
      {(() => {
        switch (step) {
          case SendMoneyStepsEnum.TRANSACTION_START:
            return (
              <TransactionStart
                contactList={contactList}
                setContactList={setContactList}
                accountsList={accountsList}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
                selectedAccount={selectedAccount}
                setSelectedAccount={setSelectedAccount}
                transactionType={transactionType as TransactionTypeEnum}
                handleTriggerTransaction={handleTriggerTransaction}
                isProcessing={isProcessing}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                mainInfo={mainInfo}
                setMainInfo={setMainInfo}
                step={SendMoneyStepsEnum.TRANSACTION_START}
                transactionMethod={transactionMethod as TransactionMethodTypeEnum}
                note={note}
                setNote={setNote}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_DETAILS:
            return (
              <TransactionDetails
                user={user}
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
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_STATUS:
            return (
              <TransactionStatus
                user={user}
                transaction={transaction}
                transactionType={transactionType as TransactionTypeEnum}
                transactionMethod={transactionMethod as TransactionMethodTypeEnum}
                resetMainInfo={resetMainInfo}
              />
            );
          case SendMoneyStepsEnum.TRANSACTION_COMPLETE:
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
