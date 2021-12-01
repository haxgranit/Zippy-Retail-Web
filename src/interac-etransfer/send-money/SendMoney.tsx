import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';
import {
  StepComponent,
  DetailsPage,
  SecurityQuestionPage,
  SecurityRecipientPage,
  TransferSentCompletePage,
  TransferSentPage,
} from './components';
import SendMoneyVerificationModal from '../dialogs/SendMoneyVerificationModal';

interface QuickLink {
  id: number;
  url: string;
  text: string;
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
  const [currentStep, setCurrentStep] = useState(1);
  const [realStep, setRealStep] = useState(1);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [selectedUser, setUserToSend] = useState(1);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [realStep]);

  return (
    <div>
      <SendMoneyVerificationModal
        show={showVerifyModal}
        handleClose={() => setShowVerifyModal(false)}
        handleNext={() => {
          if (selectedUser === 1) {
            setRealStep(4);
          } else {
            setRealStep(5);
          }
          setCurrentStep(3);
          setShowVerifyModal(false);
        }}
        handleBack={() => {
          setRealStep(1);
          setCurrentStep(1);
          setShowVerifyModal(false);
        }}
      />
      <CommonHeader title="SEND MONEY" print={false} />
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
              selectedUser={selectedUser}
              setUserToSend={setUserToSend}
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
            />
          )}
          {currentStep === 3 && realStep === 4 && (
            <TransferSentPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 3 && realStep === 5 && (
            <TransferSentCompletePage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
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
