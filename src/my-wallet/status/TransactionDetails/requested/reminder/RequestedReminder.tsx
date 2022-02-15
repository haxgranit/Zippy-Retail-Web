import
{
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { TransactionProps } from '../../TransactionStatus';

function RequestedReminder({
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="title">
        <h3>Reminder Sent</h3>
      </div>
      <Row>
        <Col xs={6}>To</Col>
        <Col xs={6}>
          <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
          <div>{transaction && ` (${transaction.contact.email})`}</div>
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
      <Stack gap={3} direction="horizontal">
        <Button
          className="zippy-btn zippy-flat d-flex center w-full"
          onClick={() => navigate('/my-wallet/status')}
        >
          Back to Status
        </Button>
        <Button
          className="zippy-btn d-flex ms-auto center w-full"
          onClick={() => navigate('/my-wallet/zippy-money/request/transaction-start')}
        >
          Send Another
        </Button>
      </Stack>
    </>
  );
}

export default RequestedReminder;
