import {
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { TransactionProps } from '../../TransactionStatus';
import { MethodTypeEnum } from '../../../../../constants/enum/MethodTypeEnum';

export default function SentCompleted({
  type,
  user,
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();
  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const getUserEmail = () => (user && user.email ? user.email : '');
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
          <h3>Transaction Completed</h3>
        </div>
        {!transaction?.fundingSource && (
          <Row>
            <Col xs={6}>From</Col>
            <Col xs={6}>
              <strong>{getUserFullName()}</strong>
              {user && ` (${getUserEmail()})`}
            </Col>
          </Row>
        )}
        {!transaction?.fundingSource && (
          <Row>
            <Col xs={6}>To</Col>
            <Col xs={6}>
              {transaction?.contact && (
                <span>
                  <strong>{`${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}`}</strong>
                    {` (${transaction.contact.email})`}
                </span>
              )}
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={6}>Transfer Date</Col>
          <Col xs={6}>
            {transaction?.createdDate ? DateTime.fromISO(transaction.createdDate).toLocaleString(DateTime.DATE_MED) : ''}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Transfer Time (UTC)</Col>
          <Col xs={6}>{transaction?.createdDate ? DateTime.fromISO(transaction.createdDate).toUTC().toLocaleString(DateTime.TIME_WITH_SECONDS) : ''}</Col>
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
        {transaction?.fundingSource && (
          <Row>
            <Col xs={6}>Transfer Method</Col>
            <Col xs={6}>{transaction?.method}</Col>
          </Row>
        )}
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
            onClick={() => navigate(`/my-wallet/transaction-history/${type}`)}
          >
            Back to Status
          </Button>
          <Button
            className="zippy-btn d-flex ms-auto center w-full simple"
            onClick={() => navigate(`/my-wallet/zippy-money/${getTransactionMethodURIString(transaction?.method as MethodTypeEnum)}/send/transaction-start`)}
          >
            Send Another
          </Button>
        </Stack>
      </div>
    </>
  );
}
