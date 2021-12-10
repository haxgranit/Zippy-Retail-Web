import { useState } from 'react';
import
{
  Button,
  Col,
  Form,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CancelRequestForMoneyVerification from '../dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification';
import Divider from '../components/Divider';
import QuickLinks from '../components/QuickLinks';

const LeftCol = () => {
  const [sendReminderChecked, setSendReminderChecked] = useState(true);
  const [showCancelRequestForMoney, setShowCancelRequestForMoney] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (sendReminderChecked) navigate('/interac-etransfer/status/request-reminder');
    else setShowCancelRequestForMoney(true);
  };
  const handleCancelRequestForMoneyBack = () => {
    setShowCancelRequestForMoney(false);
  };
  const handleCancelRequestForMoneyConfirmed = () => {
    setShowCancelRequestForMoney(false);
    navigate('/interac-etransfer/status/request-canceled');
  };

  return (
    <>
      <CancelRequestForMoneyVerification
        handleBack={handleCancelRequestForMoneyBack}
        handleCancelRequest={handleCancelRequestForMoneyConfirmed}
        show={showCancelRequestForMoney}
      />
      <Col xs={9}>
        REQUEST SENT
        <br />
        The request for money was sent.
        <Row className="mt-4">
          <Col>
            <ul>
              <li>
                The request was sent but the contact has not yet sent the
                transfer
              </li>
              <li>
                You can send your contact a reminder or cancel the request
              </li>
              <li>
                Note: The optional Issue Date and Document Number fields may
                display. These are the same as invoice Due Date and invoice
                Number.
              </li>
            </ul>
          </Col>
        </Row>
        <h6>Request Details</h6>
        <Divider />
        <Row className="align-items-center mt-4">
          <Col xs={4}>TO:</Col>
          <Col xs={6}>
            Kent Ulrich
            <br />
            kentu@shw.ca
          </Col>
        </Row>
        <Divider />
        <Row className="align-items-center">
          <Col xs={4}>Amount:</Col>
          <Col xs={6}>$10.00</Col>
        </Row>
        <Divider />
        <Row className="align-items-center">
          <Col xs={4}>Deposit to:</Col>
          <Col xs={6}>010-01702-9199639</Col>
        </Row>
        <Divider />
        <Row className="mt-2">
          <Col xs={4}>This Request Will Expire On</Col>
          <Col xs={6}>Jan 2,2022</Col>
        </Row>
        <Divider />
        <Row className="align-items-center">
          <Col xs={4}>Actions</Col>
          <Col xs={6}>
            <Form.Check
              type="radio"
              label="Send Reminder to Contact"
              name="Actions"
              onChange={() => setSendReminderChecked(true)}
              checked={sendReminderChecked}
            />
            <Form.Check
              type="radio"
              label="Cancel the Request"
              name="Actions"
              onChange={() => setSendReminderChecked(false)}
              checked={!sendReminderChecked}
            />
          </Col>
        </Row>
        <Divider />
        <Stack gap={3} direction="horizontal">
          <Button
            variant="outline-primary ms-auto"
            onClick={() => navigate('/interac-etransfer/status')}
          >
            Back
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </Stack>
      </Col>
    </>
  );
};

export default function RequestSent() {
  return (
    <div>
      <Row>
        <Col>
          <h2>STATUS</h2>
        </Col>
      </Row>
      <Row>
        <LeftCol />
        <QuickLinks />
      </Row>
    </div>
  );
}
