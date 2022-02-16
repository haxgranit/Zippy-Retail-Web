import {
  Button,
  Col,
  Row, Stack,
} from 'react-bootstrap';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { TransactionProps } from '../../TransactionStatus';

function ReceivedFailed({
  user,
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();

  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');

  return (
    <>
      <div className="body">
        <div className="title">
          <h3>Transaction Failed</h3>
        </div>
        <Row>
          <Col xs={6}>From</Col>
          <Col xs={6}>
            <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
            {transaction && ` (${transaction.contact.email})`}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>To</Col>
          <Col xs={6}>
            <strong>{getUserFullName()}</strong>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Transfer Date</Col>
          <Col xs={6}>
            {transaction && transaction.date ? DateTime.fromISO(transaction.date).toLocaleString(DateTime.DATE_MED) : ''}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Transfer Amount</Col>
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
          <Col xs={6}>
            <div>Reference Number</div>
            <div>(Keep For Your Records)</div>
          </Col>
          <Col xs={6}>{transaction?.id}</Col>
        </Row>
      </div>
      <div className="action">
        <Stack gap={3} direction="horizontal">
          <Button
            className="zippy-btn zippy-flat d-flex center w-full simple"
            onClick={() => navigate('/my-wallet/status')}
          >
            Back
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default ReceivedFailed;