import { Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import Api, { Transaction, TransactionStatusEnum, TransferType } from '../../../api';

export default function TransactionStatusList() {
  const { instance, accounts } = useMsal();
  const api = new Api(instance, accounts[0]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedType, setSelectedType] = useState<TransferType>(TransferType.ALL);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const getTransations = (type: TransferType) => {
    setSelectedType(type);
    setIsProcessing(true);
    api
      .getInteracEtransferTransactions(type)
      .then((data) => {
        setIsProcessing(false);
        setTransactions(data);
      });
  };

  const getUserFullName = (transaction: Transaction): string => {
    const contact = transaction?.contact;
    return contact && contact.firstName && contact.lastName ? `${contact.firstName} ${contact.lastName}` : '';
  };

  const getIconClass = (status: TransactionStatusEnum): string => {
    switch (status) {
      case TransactionStatusEnum.COMPLETED:
        return TransactionStatusEnum.COMPLETED;
      case TransactionStatusEnum.CANCELLED:
      case TransactionStatusEnum.FAILED:
        return TransactionStatusEnum.FAILED;
      case TransactionStatusEnum.PENDING:
      default:
        return TransactionStatusEnum.PENDING;
    }
  };

  useEffect(() => {
    getTransations(selectedType);
  }, []);

  return (
    <>
      <PageContainer
        title="Transactions History"
        className="status-list"
        backdropImage="backdrop-image-3"
      >
        <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
          <Button
            className={selectedType === TransferType.ALL ? 'active' : ''}
            onClick={() => getTransations(TransferType.ALL)}
            disabled={selectedType === TransferType.ALL}
          >
            All
          </Button>
          <Button
            className={selectedType === TransferType.SEND ? 'active' : ''}
            onClick={() => getTransations(TransferType.SEND)}
            disabled={selectedType === TransferType.SEND}
          >
            Send
          </Button>
          <Button
            className={selectedType === TransferType.RECEIVE ? 'active' : ''}
            onClick={() => getTransations(TransferType.RECEIVE)}
            disabled={selectedType === TransferType.RECEIVE}
          >
            Received
          </Button>
          <Button
            className={selectedType === TransferType.REQUEST ? 'active' : ''}
            onClick={() => getTransations(TransferType.REQUEST)}
            disabled={selectedType === TransferType.REQUEST}
          >
            Requested
          </Button>
        </div>
        <div className="status-list-container">
          {!isProcessing ? (
            transactions.map((item: Transaction) => (
              <div>
                <Row className="transaction-items">
                  <Col xs={1} className="status-icon">
                    <i className={`zippy-cash-icon zc-${getIconClass(item.status)}`} />
                  </Col>
                  <Col xs={10}>
                    <Row>
                      <Col xs={7} className="name">{getUserFullName(item)}</Col>
                      <Col xs={5} className="amount">
                        <NumberFormat
                          className="amount"
                          value={item.amount}
                          defaultValue={0}
                          displayType="text"
                          prefix="$ "
                          thousandSeparator
                          decimalScale={2}
                          fixedDecimalScale
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="reference-no">
                        <Link to={`/my-wallet/status/${item.id}`}>{`Reference No. ${item.id}`}</Link>
                      </Col>
                      <Col xs={5} className="date">
                        <span>{item && item.date ? DateTime.fromISO(item.date).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} className="info-icon">
                    <i className="zippy-cash-icon zc-info" />
                  </Col>
                </Row>
              </div>
            ))
          ) : 'loading'}
        </div>
      </PageContainer>
    </>
  );
}
