import { useState, useEffect } from 'react';
import {
  Alert,
  Col,
  Row,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import CommonHeader from '../../common/CommonHeader';
import StepComponent from '../../common/StepComponent';
import { RequestDetails } from './components/RequestDetails';
import RequestSent from './components/RequestSent';
import RequestMoneyVerificationModal from '../dialogs/RequestMoneyVerificationModal';
import Api, { Account, Contact, InteracEtransferTransaction } from '../../api';
import { TransferDetails } from '../dialogs/SendMoneyVerificationModal';

export interface RequestMainDetails {
  amount: number;
  invoiceNumber: number;
  message: string;
  notifyByEmail: boolean;
  notifyTextMessage: boolean;
  agreed: boolean;
}

const Divider = () => <div className="border-top my-3" />;

export default function RequestMoney() {
  const { state } = useLocation();
  const step = state ? state.step : undefined;
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [pageIndex, setPageIndex] = useState(1);
  const [isRequestingMoney, setIsRequestingMoney] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [mainInfo, setMainInfo] = useState<RequestMainDetails>({
    amount: 0,
    message: '',
    invoiceNumber: 0,
    notifyByEmail: false,
    notifyTextMessage: false,
    agreed: false,
  });

  const [accountsList, setAccountsList] = useState<Account[] | null>([]);
  const [contactList, setContactList] = useState<Contact[] | null>([]);
  const { instance, accounts } = useMsal();

  const getTransferDetails = (): TransferDetails => {
    const sourceAccount: Account = accountsList!.find(
      (x) => x.id === selectedAccount,
    )!;
    const destinationContact: Contact = contactList!.find(
      (x) => x.id === selectedContact,
    )!;
    return {
      amount: mainInfo.amount,
      source: {
        name: sourceAccount?.name ?? '',
        email: sourceAccount?.email ?? '',
      },
      destination: {
        name: `${destinationContact?.firstName ?? ''} ${
          destinationContact?.lastName ?? ''
        }`,
        email: destinationContact?.email ?? '',
      },
      fromAccount: sourceAccount?.name,
    };
  };

  const handleRequestMoneyVerificationClose = () => setShowVerifyModal(false);

  const handleRequestMoneyVerificationBack = () => {
    setPageIndex(1);
    setCurrentStep(1);
    setShowVerifyModal(false);
  };

  useEffect(() => {
    const currentApi = new Api(instance, accounts[0]);

    (async () => {
      try {
        const result = await currentApi.listAccounts();
        setAccountsList(result);
      } catch (err) {
        setTimeout(() => {
          setErrorMessage('Sorry! a problem has occurred when getting accounts.');
        }, 0);
      }

      try {
        const result = await currentApi.listContacts();
        setContactList(result);
      } catch (err) {
        setTimeout(() => {
          setErrorMessage('Sorry! a problem has occurred when getting contacts.');
        }, 0);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageIndex]);

  useEffect(() => {
    if (errorMessage) window.scrollTo(0, 0);
  }, [errorMessage]);

  const handleRequestMoneyVerificationNext = () => {
    const data: InteracEtransferTransaction = {
      contactId: selectedContact,
      amount: mainInfo.amount,
      type: 'request',
    };
    setIsRequestingMoney(true);
    new Api(instance, accounts[0])
      .postInteracEtransferTransaction(data)
      .then(() => {
        setErrorMessage(null);
        setCurrentStep(2);
      })
      .catch(() => setErrorMessage('Transfer failed.'))
      .finally(() => {
        setIsRequestingMoney(false);
        setShowVerifyModal(false);
      });
  };

  return (
    <div>
      <RequestMoneyVerificationModal
        show={showVerifyModal}
        handleClose={handleRequestMoneyVerificationClose}
        handleNext={handleRequestMoneyVerificationNext}
        handleBack={handleRequestMoneyVerificationBack}
        isRequestingMoney={isRequestingMoney}
        transferDetails={getTransferDetails()}
      />
      <CommonHeader title="REQUEST MONEY" print={false} />
      {errorMessage && (
        <Alert variant="danger" className="rounded-0 text-dark py-2 my-2 px-5">
          <i />
          {errorMessage}
        </Alert>
      )}
      <Row>
        <Col xs={9}>
          <Row>
            <Col>
              <StepComponent
                steps={2}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                navigateSteps={setPageIndex}
              />
            </Col>
          </Row>
          {currentStep === 1 && (
            <RequestDetails
              setPageIndex={setPageIndex}
              setCurrentStep={setCurrentStep}
              selectedContact={selectedContact}
              setContactToSend={setSelectedContact}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
              setMainInfo={setMainInfo}
              mainInfo={mainInfo}
              accounts={accountsList}
              contacts={contactList}
              setErrorMessage={setErrorMessage}
              showModal={setShowVerifyModal}
            />
          )}
          {currentStep === 2 && (
            <RequestSent
              accounts={accountsList}
              contacts={contactList}
              selectedAccount={selectedAccount}
              selectedContact={selectedContact}
              mainInfo={mainInfo}
              setCurrentStep={setCurrentStep}
            />
          )}
          <Divider />
          <Row>
            <Col>
              <b>Note:</b>
              <br />
              Your use of
              {' '}
              <i>Interac</i>
              {' '}
              e-Transfer is subject to the
              {' '}
              <i>Interac</i>
              {' '}
              e-Transfer Terms and conditions (PDF, 197 KB).
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <div className="border p-2 rounded">
            <b>You can also:</b>
            <br />
            View upcoming bill payments and transfers &gt;
            <br />
            Stop a payment &gt;
            <br />
            Change your statement preferences &gt;
          </div>
        </Col>
      </Row>
    </div>
  );
}
