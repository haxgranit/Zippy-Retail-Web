import { useEffect, useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { TransferInformation } from './components/TransferSentPage';
import TRANSFER_INFORMATION from '../../stories/TransferInformation';

export const enum PageIds {
  DetailsPageId = 'details',
  SecurityRecipientPageId = 'security-recipient',
  SecurityQuestionPageId = 'security-question',
  SendMoneyVerifyPageId = 'send-money-verify',
  TransferSentPageId = 'transfer-sent',
  TransferSentCompletedId = 'transfer-sent-complete',
}

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
  securityQuestion: string | undefined;
  securityAnswer: string | undefined;
  confirmSecurityAnswer: string | undefined;
  showAnswer: boolean;
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

const StepIndexes: any = {
  details: 1,
  'security-recipient': 2,
  'security-question': 2,
  'send-money-verify': 2,
  'transfer-sent': 3,
  'transfer-sent-complete': 3,
};

const MainSteps: any = [
  'details',
  'security-recipient',
  'transfer-sent',
];

export default function SendMoney() {
  const navigate = useNavigate();
  const { stepId, transactionId } = useParams();
  const step = stepId ? StepIndexes[stepId] : undefined;
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [pageId, setPageId] = useState(stepId || PageIds.DetailsPageId);
  const [showVerifyModal, setShowVerifyModal] = useState(
    stepId === PageIds.SendMoneyVerifyPageId || false,
  );
  const [isProcessing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [mainInfo, setMainInfo] = useState<TransferMainDetails>({
    amount: 0,
    destination: { email: '', name: '' },
    source: { email: '', name: '' },
    fromAccount: '',
    message: '',
    transferMethod: 'Email',
    securityAnswer: undefined,
    confirmSecurityAnswer: undefined,
    securityQuestion: undefined,
    showAnswer: false,
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
  // will remove after integrating api response
  const tempTransferInformation: TransferInformation = TRANSFER_INFORMATION;

  const handleSendMoneyVerificationNext = () => {
    const data: InteracEtransferTransaction = {
      contactId: selectedContact,
      amount: mainInfo.amount,
      type: 'send',
    };
    setProcessing(true);
    new Api(instance, accounts[0])
      .postInteracEtransferTransaction(data)
      .then((res) => {
        setErrorMessage(null);
        if (selectedContact === 1) {
          setPageId(PageIds.TransferSentPageId);
          navigate(`/interac-etransfer/send-money/${PageIds.TransferSentPageId}/${res.id}`);
        } else {
          setPageId(PageIds.TransferSentCompletedId);
          navigate(`/interac-etransfer/send-money/${PageIds.TransferSentCompletedId}/${res.id}`);
        }
        setCurrentStep(3);
      })
      .catch(() => setErrorMessage('Transfer failed.'))
      .finally(() => {
        setProcessing(false);
        setShowVerifyModal(false);
      });
  };

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

  const handleSendMoneyVerificationClose = () => {
    setShowVerifyModal(false);
    navigate(
      `/interac-etransfer/send-money/${
        selectedContact === 1
          ? PageIds.SecurityRecipientPageId
          : PageIds.SecurityQuestionPageId
      }`,
    );
  };

  const handleSendMoneyVerificationBack = () => {
    setPageId(PageIds.DetailsPageId);
    setCurrentStep(1);
    setShowVerifyModal(false);
    navigate(`/interac-etransfer/send-money/${PageIds.DetailsPageId}`);
  };

  const validateInputs = (): string | null => {
    if (selectedContact === 0) return 'Please select a contact to send money to';
    if (selectedAccount === 0) return 'Please select an account';
    if (mainInfo.amount <= 0) return 'Amount should be greater than 0';
    if (mainInfo.amount > 3000) return 'The maximum amount you can send in each transfer is $3,000';
    if (!mainInfo.transferMethod) return 'Please select a transfer method';
    return null;
  };

  const navigateSteps = (nav_step: string) => {
    const isValidated = validateInputs();
    if (isValidated && nav_step !== PageIds.DetailsPageId) {
      setErrorMessage(isValidated);
      setCurrentStep(1);
      return;
    }

    if (
      !transactionId
      && (nav_step === PageIds.TransferSentPageId
      || nav_step === PageIds.TransferSentCompletedId)
    ) {
      setCurrentStep(2);
      return;
    }
    setPageId(nav_step);
    navigate(`/interac-etransfer/send-money/${nav_step}${transactionId ? `/${transactionId}` : ''}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);
  useEffect(() => {
    if (errorMessage) window.scrollTo(0, 0);
  }, [errorMessage]);

  useEffect(() => {
    setPageId(stepId || PageIds.DetailsPageId);
    const mainStep = stepId ? StepIndexes[stepId] : undefined;
    setCurrentStep(mainStep || 1);
    setShowVerifyModal(false);
    if (stepId === PageIds.SendMoneyVerifyPageId) {
      setShowVerifyModal(true);
    }
    if (!selectedAccount && !selectedContact) {
      navigateSteps(PageIds.DetailsPageId);
    }
  }, [stepId]);

  return (
    <div>
      <SendMoneyVerificationModal
        show={showVerifyModal}
        handleClose={handleSendMoneyVerificationClose}
        handleNext={handleSendMoneyVerificationNext}
        handleBack={handleSendMoneyVerificationBack}
        isSendingMoney={isProcessing}
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
                navigateSteps={(stepIndex: number) => {
                  navigateSteps(MainSteps[stepIndex]);
                }}
              />
            </Col>
          </Row>
          {pageId === PageIds.DetailsPageId && (
            <DetailsPage
              selectedContact={selectedContact}
              setContactToSend={setSelectedContact}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
              mainInfo={mainInfo}
              setMainInfo={setMainInfo}
              accounts={accountsList}
              contacts={contactList}
              setErrorMessage={setErrorMessage}
              validateInputs={validateInputs}
              setCurrentStep={setCurrentStep}
              navigateSteps={navigateSteps}
            />
          )}
          {(pageId === PageIds.SecurityRecipientPageId
            || (selectedContact === 1 && pageId === PageIds.SendMoneyVerifyPageId)) && (
              <SecurityRecipientPage
                navigateSteps={navigateSteps}
                setCurrentStep={setCurrentStep}
                showModal={setShowVerifyModal}
              />
          )}
          {(pageId === PageIds.SecurityQuestionPageId
            || (selectedContact && selectedContact !== 1
              && pageId === PageIds.SendMoneyVerifyPageId)) && (
              <SecurityQuestionPage
                navigateSteps={navigateSteps}
                setCurrentStep={setCurrentStep}
                showModal={setShowVerifyModal}
                mainInfo={mainInfo}
                setMainInfo={setMainInfo}
                setErrorMessage={setErrorMessage}
              />
          )}
          {(
            pageId === PageIds.TransferSentPageId
            || pageId === PageIds.TransferSentCompletedId
          ) && (
            <TransferSentPage
              navigateSteps={navigateSteps}
              setCurrentStep={setCurrentStep}
              transferInformation={tempTransferInformation}
              isCompleted={pageId === PageIds.TransferSentCompletedId}
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
