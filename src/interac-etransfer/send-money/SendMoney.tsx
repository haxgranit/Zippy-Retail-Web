import { useState } from 'react';
import {
  Col,
  Form,
  FormControl,
  Row,
  Button,
  Alert,
} from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

interface Steps {
  steps: number;
  currentStep: number;
  setCurrentStep: any;
  setRealStep: any;
}

const DetailsPage = ({ setRealStep, setCurrentStep }: any): JSX.Element => (
  <>
    <h4>Your Interac e-Transfer Details</h4>
    <ul>
      <li>
        Fees apply to Interac e-Transfer transactions.
        <a href="/" className="text-black">
          Learn more about Interac e-Transfer fees
        </a>
      </li>
      <li>
        There are limits on how much money you can send in a day, a week and a
        month.
        <a href="/" className="text-black">
          Learn more about Interac e-Transfer limits
        </a>
      </li>
      <li>
        Note: Sending money outside of Canada? Use the
        <a href="/" className="text-black">
          {' '}
          CIBC Global Money Transfer Servicec
        </a>
      </li>
    </ul>
    <Row className="mt-4">
      <Col md={4}>
        <Form.Label>Send Money To:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="email" />
        <p>Email: chelsea.tough@gmail.com</p>
        <p>
          <a href="/" className="text-black">
            Edit Contact
          </a>
        </p>
        <p>
          <a href="/" className="text-black">
            New Contact
          </a>
        </p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Amount:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="email" />
        <Form.Label>
          The maximum amount you can send in each transfer is $3,000.
        </Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>From Account:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Select>
          <option>Cheguing (01702-81-99639) $2,260.57</option>
          <option>Cheguing (01702-81-99639) $2,260.57</option>
        </Form.Select>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Transfer Method:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Select>
          <option>Email</option>
          <option>Phone</option>
        </Form.Select>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Message (Optional):</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Control as="textarea" rows={3} />
        <p>
          Do not provide the security question, any part of the security answer
          or any confidential information in your message to the contact. This
          message will be viewable on the Interac e-Transfer Status page.
        </p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={12}>
        <p>
          This is how you will appear in all emails to your Interac e-Transfer
          contacts. If incorrect,
          <a href="/" className="text-black">
            edit your profile.
          </a>
        </p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Your Email Nickname:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>DUANE TOUGH</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Your Email Address:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>dtough@hotmail.com</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col>
        <Button variant="light" className="d-flex">
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
          Cancel
        </Button>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => {
            setCurrentStep(2);
            setRealStep(2);
          }}
        >
          Next
        </Button>
      </Col>
    </Row>
  </>
);

const SecurityRecipientPage = ({ setRealStep }: any): JSX.Element => (
  <>
    <h4>Security Question for Recipient</h4>
    <p className="mt-4 mb-4">
      CHELSEA TOUGH is registered for Autodeposit. This transfer does not
      require a security question
    </p>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col>
        <Button variant="light" className="d-flex">
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
          Cancel
        </Button>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
          onClick={() => setRealStep(1)}
        >
          Back
        </Button>
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => setRealStep(3)}
        >
          Continue
        </Button>
      </Col>
    </Row>
  </>
);

const SecurityQuestionPage = ({
  setRealStep,
  setCurrentStep,
}: any): JSX.Element => (
  <>
    <h4>Security Question</h4>
    <ul className="mt-4 mb-4">
      <li>
        Enter a security question and response that only this contact can
        answer. They must answer the security question correctly to receive the
        Interac e-Transfer.
      </li>
      <li>
        The security question can be up to 40 characters including spaces.
      </li>
      <li>
        The security answer must be between 6 and 25 characters. It can contain
        letters and numbers, but not special characters such as &quot;%&quot;
        and &quot;/&quot;
      </li>
      <li>
        The answer to the security question may not be part of the security
        question or the optional message
      </li>
      <li>
        The security question can not contain the same words as the security
        answer
      </li>
      <li>
        You are responsible for notifying the contact of the security question
        and exact answer
      </li>
    </ul>
    <h4 className="mt-4">Details</h4>
    <Alert variant="info">
      <div className="d-flex align-items-center">
        <div
          style={{
            width: 40,
            height: 45,
            border: '1px dotted grey',
            textAlign: 'center',
          }}
        >
          P
        </div>
        <div>
          <p>
            The security question and answer must be unique. Never share your
            security answer through email, text or social media
          </p>
        </div>
      </div>
    </Alert>
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Create a security question:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Security Answer(no spaces):</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
        <Form.Check type="checkbox" label="Show Answer" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Re-enter Security Answer:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col>
        <Button
          variant="light"
          className="d-flex"
          onClick={() => setRealStep(2)}
        >
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
          Cancel
        </Button>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
          onClick={() => setRealStep(2)}
        >
          Back
        </Button>
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => {
            setRealStep(4);
            setCurrentStep(3);
          }}
        >
          Next
        </Button>
      </Col>
    </Row>
  </>
);

const TransferSentPage = ({ setRealStep }: any): JSX.Element => (
  <>
    <div className="d-flex align-items-center">
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
      <h4>Your transfer has been sent</h4>
    </div>
    <p>
      If you opted to send a notification of your transfer, your contact will
      receive it shortly.
    </p>
    <p>This transfer is final and can&apos;t be recalled.</p>
    <Row className="mt-4">
      <Col md={4}>
        <Form.Label>From:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>DUANE TOUGH</Form.Label>
        <p>dtough@hotmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Your Email Nickname:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>CHELSEA TOUGH</Form.Label>
        <p>chelsea.tough@gmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Account Balance:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,260.57</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Amount:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,000.00</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>From Account:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>Cheguing (01702-81-99639)</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Reference Number:(keep for your records)</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>3942439898</Form.Label>
      </Col>
    </Row>
    <p className="mt-4">Submitted: November 9, 2021 at 6:44 p.m. ET.</p>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
        >
          Check Status
        </Button>
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => setRealStep(5)}
        >
          Send another transfer
        </Button>
      </Col>
    </Row>
    <Row>
      <Col md={8}>
        <h4>
          It&apos;s safe and easy to get Interac e-Transfer funds deposited
          directly into your account
        </h4>
        <a href="/" className="text-danger">
          Register for Autodeposit
          {'>'}
        </a>
      </Col>
      <Col md={4}>
        <div style={{ width: '100%', height: 150, border: '1px dotted grey' }}>
          p
        </div>
      </Col>
    </Row>
  </>
);

const TransferSentCompletePage = (): JSX.Element => (
  <>
    <div className="d-flex align-items-center">
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
      <h4>Your transfer has been sent</h4>
    </div>
    <p>
      If you opted to send a notification of your transfer, your contact will
      receive it shortly.
    </p>
    <p>This transfer is final and can&apos;t be recalled.</p>
    <Row className="mt-4">
      <Col md={4}>
        <Form.Label>From:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>DUANE TOUGH</Form.Label>
        <p>dtough@hotmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Your Email Nickname:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>CHELSEA TOUGH</Form.Label>
        <p>chelsea.tough@gmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Account Balance:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,260.57</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Security Question:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>45056454585524585512</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Response:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>***************</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Amount:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,000.00</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>From Account:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>Cheguing (01702-81-99639)</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Expiry Date:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>Dec 9, 2021</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Reference Number:(keep for your records)</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>3942439898</Form.Label>
      </Col>
    </Row>
    <p className="mt-4">Submitted: November 9, 2021 at 6:44 p.m. ET.</p>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
        >
          Check Status
        </Button>
        <Button variant="danger" className="d-flex">
          Send another transfer
        </Button>
      </Col>
    </Row>
    <Row>
      <Col md={8}>
        <h4>
          It&apos;s safe and easy to get Interac e-Transfer funds deposited
          directly into your account
        </h4>
        <a href="/" className="text-danger">
          Register for Autodeposit
          {'>'}
        </a>
      </Col>
      <Col md={4}>
        <div style={{ width: '100%', height: 150, border: '1px dotted grey' }}>
          p
        </div>
      </Col>
    </Row>
  </>
);

const StepComponent = ({
  steps,
  currentStep,
  setCurrentStep,
  setRealStep,
}: Steps): JSX.Element => {
  const stepNumberStyle = {
    width: 25,
    height: 25,
    borderRadius: 50,
    border: '2px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const selectedStepNumberStyle = {
    width: 25,
    height: 25,
    borderRadius: 50,
    border: '2px solid #C41F3E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C41F3E',
    color: 'white',
  };
  const allSteps = [];
  for (let i = 0; i < steps; i += 1) {
    if (i > 0 && i < steps) {
      allSteps.push(
        <div
          style={
            currentStep > i
              ? { height: 2, width: 15, backgroundColor: '#C41F3E' }
              : { height: 2, width: 15, backgroundColor: 'grey' }
          }
          key={`dash_${i}`}
        />,
      );
    }
    allSteps.push(
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div
        style={currentStep >= i + 1 ? selectedStepNumberStyle : stepNumberStyle}
        role="button"
        onKeyPress={(evt) => console.log(evt)}
        onClick={() => {
          setCurrentStep(i + 1);
          setRealStep(i * 2);
        }}
        key={`step_${i}`}
      >
        {i + 1}
      </div>,
    );
  }
  return (
    <div className="d-flex align-items-center mt-3 mb-3">
      <span style={{ fontWeight: 'bold', marginRight: 10 }}>Steps: </span>
      {allSteps}
    </div>
  );
};

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

  return (
    <div>
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
            />
          )}
          {currentStep === 2 && realStep === 2 && (
            <SecurityRecipientPage setRealStep={setRealStep} />
          )}
          {currentStep === 2 && realStep === 3 && (
            <SecurityQuestionPage
              setRealStep={setRealStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 3 && realStep === 4 && (
            <TransferSentPage setRealStep={setRealStep} />
          )}
          {currentStep === 3 && realStep === 5 && <TransferSentCompletePage />}
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
