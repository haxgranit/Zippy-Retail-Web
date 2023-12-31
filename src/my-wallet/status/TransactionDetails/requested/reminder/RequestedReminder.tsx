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
import { MethodTypeEnum } from '../../../../../constants/enum/MethodTypeEnum';

function RequestedReminder({
  type,
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();
  const getTransactionMethodURIString = (method: MethodTypeEnum) => {
    switch (method) {
      case MethodTypeEnum.FUNDINGSOURCE:
        return 'funding-source';
      case MethodTypeEnum.INTERAC_E_TRANSFER:
        return 'interac-e-transfer';
      case MethodTypeEnum.ZIPPY:
      default:
        return 'zippy-cash';
    }
  };

  return (
    <>
      <div className="body">
        <div className="title">
          <h3>Reminder Sent</h3>
        </div>
        <Row>
          <Col xs={6}>To</Col>
          <Col xs={6}>
            {transaction?.contact && (
              <span>
                <strong>{`${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}`}</strong>
                  {` (${transaction.contact.email})`}
              </span>
            )}
            {transaction?.fundingSource && (
              <span>
                <strong>{`${transaction.fundingSource.displayName || ''}`}</strong>
                  {` (${transaction.fundingSource.bankAccount?.accountNumber})`}
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Transfer Amount</Col>
          <Col xs={6}>
            <strong className="amount">
              {transaction?.amount && (
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
      </div>
      <div className="action">
        <Stack gap={3} direction="horizontal">
          <Button
            className="zippy-btn zippy-flat d-flex center w-full simple"
            onClick={() => navigate(`/my-wallet/transaction-history/${type}`)}
          >
            Back to Status
          </Button>
          <Button
            className="zippy-btn d-flex ms-auto center w-full simple"
            onClick={() => navigate(`/my-wallet/zippy-money/${getTransactionMethodURIString(transaction?.method as MethodTypeEnum)}/request/transaction-start`)}
          >
            Send Another
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default RequestedReminder;
