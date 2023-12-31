import { useState } from 'react';
import
{
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { useMsal } from '@azure/msal-react';
import CancelRequestForMoneyVerification from '../../dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification';
import { TransactionProps } from '../../TransactionStatus';
import Api from '../../../../../api';

function RequestedPending({
  type,
  user,
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { id } = useParams();
  const [showCancelRequestForMoney, setShowCancelRequestForMoney] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const getUserEmail = () => (user && user.email ? user.email : '');

  const sendReminder = () => {
    setProcessing(true);
    new Api(instance, accounts[0])
      .getInteracEtransferSendReminder(Number(id))
      .finally(() => {
        setProcessing(false);
        navigate(`/my-wallet/transaction-history/${type}/reminder/${id}`);
      });
  };

  const cancelRequest = () => {
    setShowCancelRequestForMoney(true);
  };

  const handleCancelRequestForMoneyBack = () => {
    setShowCancelRequestForMoney(false);
  };

  const handleCancelRequestForMoneyConfirmed = async () => {
    setProcessing(true);
    await new Api(instance, accounts[0])
      .getInteracEtransferCancelTransaction(Number(id))
      .finally(() => {
        setProcessing(false);
        setShowCancelRequestForMoney(false);
        navigate(`/my-wallet/transaction-history/${type}/cancelled/${id}`);
      });
  };

  return (
    <>
      <div className="body">
        <CancelRequestForMoneyVerification
          transaction={transaction}
          handleBack={handleCancelRequestForMoneyBack}
          handleCancelRequest={handleCancelRequestForMoneyConfirmed}
          show={showCancelRequestForMoney}
          processing={processing}
        />
        <div className="title">
          <h3>Transaction Pending</h3>
        </div>
        {!transaction?.fundingSource && (
          <Row>
            <Col xs={6}>From</Col>
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
        {!transaction?.fundingSource && (
          <Row>
            <Col xs={6}>To</Col>
            <Col xs={6}>
              <strong>{getUserFullName()}</strong>
              {user && ` (${getUserEmail()})`}
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
        {!transaction?.fundingSource && (
          <Row>
            <Col xs={6}>This Request Will Expire On</Col>
            <Col xs={6}>Jan 2,2022</Col>
          </Row>
        )}
      </div>
      <div className="action">
        <Stack gap={3} direction="horizontal">
          <Button
            className="zippy-btn zippy-flat d-flex center w-full simple"
            onClick={() => cancelRequest()}
            disabled={processing}
          >
            Cancel Request
          </Button>
          <Button
            className="zippy-btn d-flex ms-auto center w-full simple"
            onClick={() => sendReminder()}
            disabled={processing}
          >
            {processing && <div className="loading spinner-border" role="status" />}
            {!processing ? 'Send Reminder' : 'Sending...'}
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default RequestedPending;
