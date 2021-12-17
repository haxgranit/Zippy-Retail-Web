import { useEffect, useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';
import { useLocation } from 'react-router-dom';
import CommonHeader from '../../common/CommonHeader';
import StepComponent from '../../common/StepComponent';
import {
  DetailsPage,
  SecurityQuestionPage,
  SecurityRecipientPage,
  TransferSentPage,
} from './components';
import SendMoneyVerificationModal, {
  TransferDetails,
} from '../dialogs/SendMoneyVerificationModal';
import Api, { Account, InteracEtransferTransaction, Contact } from '../../api';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

export interface TransferMainDetails {
  source: { name: string; email: string };
  destination: { name: string; email: string };
  fromAccount: string;
  amount: number;
  message: string;
  transferMethod: string;
}

const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a
    href={url}
    key={id}
    style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}
  >
    {text}
  </a>
);

export default function SendMoney() {
  const { state } = useLocation();
  const step = state ? state.step : undefined;
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [realStep, setRealStep] = useState(currentStep >= 3 ? 5 : 1);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [isSendingMoney, setIsSendingMoney] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState(0);
  const [mainInfo, setMainInfo] = useState<TransferMainDetails>({
    amount: 0,
    destination: { email: '', name: '' },
    source: { email: '', name: '' },
    fromAccount: '',
    message: '',
    transferMethod: '',
  });

  const [accountsList, setAccountsList] = useState<Account[] | null>([]);
  const [contactList, setContactList] = useState<Contact[] | null>([]);
  const { instance, accounts } = useMsal();

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

  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'View upcoming bill payments and transfers',
      url: './',
    },
    {
      id: 2,
      text: 'Register for lnterac e-Transfer® Autodeposits',
      url: './',
    },
    {
      id: 3,
      text: 'Change your statement preferences',
      url: './',
    },
  ];

  const handleSendMoneyVerificationNext = () => {
    const data: InteracEtransferTransaction = {
      contactId: selectedContact,
    };
    setIsSendingMoney(true);
    new Api(instance, accounts[0])
      .postInteracEtransferTransaction(data)
      .then(() => {
        setErrorMessage(null);
        if (selectedContact === 1) {
          setRealStep(4);
        } else {
          setRealStep(5);
        }
        setCurrentStep(3);
      })
      .catch(() => setErrorMessage('Transfer failed.'))
      .finally(() => {
        setIsSendingMoney(false);
        setShowVerifyModal(false);
      });
  };

  const handleClose = () => setShowVerifyModal(false);
  const getTransferDetails = (): TransferDetails => {
    const destinationContact: Contact = contactList![selectedContact - 1];
    return {
      amount: mainInfo.amount,
      source: {
        name: accounts[0]?.name ?? '',
        email: accounts[0]?.username ?? '',
      },
      destination: {
        name: destinationContact?.name ?? '',
        email: destinationContact?.email ?? '',
      },
      fromAccount: mainInfo.fromAccount,
    };
  };
  const handleSendMoneyVerificationClose = () => setShowVerifyModal(false);

  const handleSendMoneyVerificationBack = () => {
    setRealStep(1);
    setCurrentStep(1);
    setShowVerifyModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [realStep]);

  return (
    <div>
      <SendMoneyVerificationModal
        show={showVerifyModal}
        handleClose={handleSendMoneyVerificationClose}
        handleNext={handleSendMoneyVerificationNext}
        handleBack={handleSendMoneyVerificationBack}
        isSendingMoney={isSendingMoney}
        transferDetails={getTransferDetails()}
      />
      <CommonHeader title="SEND MONEY" print={false} />
      {errorMessage && (
        <Alert variant="danger" className="rounded-0 text-dark py-2 my-2 px-5">
          <i />
          {errorMessage}
        </Alert>
      )}
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <StepComponent
                steps={3}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setRealStep={setRealStep}
              />
            </Col>
          </Row>
          {currentStep === 1 && (
            <DetailsPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
              selectedContact={selectedContact}
              setContactToSend={setSelectedContact}
              mainInfo={mainInfo}
              setMainInfo={setMainInfo}
              accounts={accountsList}
              contacts={contactList}
            />
          )}
          {currentStep === 2 && realStep === 2 && (
            <SecurityRecipientPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
              showModal={setShowVerifyModal}
            />
          )}
          {currentStep === 2 && realStep === 3 && (
            <SecurityQuestionPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
              showModal={setShowVerifyModal}
              mainInfo={mainInfo}
              setMainInfo={setMainInfo}
            />
          )}
          {currentStep === 3 && realStep === 4 && (
            <TransferSentPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
              mainInfo={mainInfo}
              setMainInfo={setMainInfo}
              isCompleted={false}
            />
          )}
          {currentStep === 3 && realStep === 5 && (
            <TransferSentPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
              mainInfo={mainInfo}
              setMainInfo={setMainInfo}
              isCompleted
            />
          )}
          <hr style={{ height: '1px' }} />
          <Row>
            <i />
            <h6 style={{ fontWeight: 'bold' }}>Note:</h6>
            <p>Your use of lnterac e-Transfer® is subject to the </p>
            <p>
              <i />
              lnterac e-Transferl Terms and conditions (PDF, 197 KB).
            </p>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <div className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <p>Online Security Guarantee</p>
            </div>
          </Row>
          <Row
            style={{
              border: 'solid #AAAAAA 1px',
              justifyItems: 'space-between',
              margin: '0px 0px 20px 0px',
            }}
          >
            <h6 style={{ paddingTop: '10px' }}>You can also:</h6>
            {quickLinks.map((q) => LinkElement(q))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
