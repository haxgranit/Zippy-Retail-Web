import { useState } from 'react';
import
{
  Button,
  Col,
  Form,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import CancelRequestForMoneyVerification from '../../../dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification';
import { TransactionProps } from '../../TransactionStatus';

function RequestedPending({
  user,
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sendReminderChecked, setSendReminderChecked] = useState(true);
  const [showCancelRequestForMoney, setShowCancelRequestForMoney] = useState(false);

  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const getUserEmail = () => (user && user.email ? user.email : '');

  const handleNext = () => {
    if (sendReminderChecked) navigate(`/interac-etransfer/status/requested/reminder/${id}`);
    else setShowCancelRequestForMoney(true);
  };
  const handleCancelRequestForMoneyBack = () => {
    setShowCancelRequestForMoney(false);
  };
  const handleCancelRequestForMoneyConfirmed = () => {
    setShowCancelRequestForMoney(false);
    navigate(`/interac-etransfer/status/requested/canceled/${id}`);
  };

  return (
    <>
      <Row>
        <CancelRequestForMoneyVerification
          transaction={transaction}
          handleBack={handleCancelRequestForMoneyBack}
          handleCancelRequest={handleCancelRequestForMoneyConfirmed}
          show={showCancelRequestForMoney}
        />
        <Col>
          <ul>
            <li>
              The request for money was sent but the contact has not yet sent the transfer.
            </li>
            <li>
              You can send your contact a reminder or cancel the request.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>From</Col>
        <Col xs={6}>
          <strong>{getUserFullName()}</strong>
          {user && ` (${getUserEmail()})`}
        </Col>
      </Row>
      <Row>
        <Col xs={4}>To</Col>
        <Col xs={6}>
          <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>Transfer Date</Col>
        <Col xs={6}>
          {transaction && transaction.date ? DateTime.fromISO(transaction.date).toLocaleString(DateTime.DATE_MED) : ''}
        </Col>
      </Row>
      <Row>
        <Col xs={4}>Transfer Amount</Col>
        <Col xs={6}>
          <strong className="amount">
            {transaction && transaction.amount
            && (
              <NumberFormat
                value={transaction.amount}
                defaultValue={0}
                displayType="text"
                prefix="$ "
                suffix=" CAD"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
              />
            )}
          </strong>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div>Reference Number</div>
          <div>(Keep For Your Records)</div>
        </Col>
        <Col xs={6}>{transaction?.id}</Col>
      </Row>
      <Row>
        <Col xs={4}>This Request Will Expire On</Col>
        <Col xs={6}>Jan 2,2022</Col>
      </Row>
      <Row>
        <Col xs={4}>Actions</Col>
        <Col xs={6}>
          <Form.Check
            id="actions1"
            type="radio"
            className="actions"
            label="Send Reminder to Contact"
            name="actions1"
            onChange={() => setSendReminderChecked(true)}
            checked={sendReminderChecked}
          />
          <Form.Check
            id="actions2"
            type="radio"
            className="actions"
            label="Cancel the Request"
            name="actions2"
            onChange={() => setSendReminderChecked(false)}
            checked={!sendReminderChecked}
          />
        </Col>
      </Row>
      <Stack gap={3} direction="horizontal">
        <Button
          className="zippy-btn zippy-flat d-flex"
          onClick={() => navigate('/interac-etransfer/status/requested')}
        >
          Back
        </Button>
        <Button
          className="zippy-btn d-flex ms-auto"
          onClick={handleNext}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}

export default RequestedPending;
