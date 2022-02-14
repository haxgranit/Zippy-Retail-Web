import {
  Button, Col, Row,
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import Api, { Transaction, TransactionStatusEnum } from '../../../api';
import { TunnelTypeEnum } from '../../../constants/enum/TunnelTypeEnum';

export default function TransactionDetails() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const api = new Api(instance, accounts[0]);
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState<Transaction>();
  const [transId] = useState<number>(Number(transactionId));
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const loadTransaction = (id: number, method: TunnelTypeEnum) => {
    if (method === TunnelTypeEnum.INTERAC_E_TRANSFER) {
      api.getInteracEtransferTransaction(id)
        .then((data) => setTransaction(data));
    } else if (method === TunnelTypeEnum.ZIPPY_CASH) {
      api.getZippyCashTransfer(id)
        .then((data) => setTransaction(data));
    }
  };

  const getUserFullName = (trans: Transaction | undefined): string => {
    const contact = trans?.contact;
    return contact && contact.firstName && contact.lastName ? `${contact.firstName} ${contact.lastName}` : '';
  };

  useEffect(() => {
    if (!isInitialized && transId) {
      setIsInitialized(true);
      loadTransaction(Number(transId), TunnelTypeEnum.INTERAC_E_TRANSFER);
    }
  });

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="title">
          {(() => {
            switch (transaction?.status) {
              case TransactionStatusEnum.COMPLETED:
                return 'Transaction Completed';
              case TransactionStatusEnum.CANCELLED:
                return 'Transaction Cancelled';
              case TransactionStatusEnum.FAILED:
                return 'Transaction Failed';
              case TransactionStatusEnum.PENDING:
              default:
                return 'Transaction Pending';
            }
          })()}
        </div>
        <div className="details">
          <Row>
            <Col xs={6}>To</Col>
            <Col xs={6}>
              <strong>{getUserFullName(transaction)}</strong>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Date</Col>
            <Col xs={6}>{transaction && transaction.date ? DateTime.fromISO(transaction.date).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Time (UTC)</Col>
            <Col xs={6}>{transaction && transaction.date ? DateTime.fromISO(transaction.date).toUTC().toLocaleString(DateTime.TIME_WITH_SECONDS) : ''}</Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Amount</Col>
            <Col xs={6}>
              <NumberFormat
                className="amount"
                value={transaction?.amount}
                defaultValue={0}
                displayType="text"
                prefix="$ "
                suffix=" CAD"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              Reference Number
              (Keep For Your Records)
            </Col>
            <Col xs={6}>{transaction?.id}</Col>
          </Row>
          <Row>
            <Col xs={6}>Expiry Date</Col>
            <Col xs={6}>{transaction && transaction.expireDate ? DateTime.fromISO(transaction.expireDate).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</Col>
          </Row>
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={() => navigate('/my-wallet/zippy-money/send/transaction-start')}
          >
            Send Another Transfer
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
