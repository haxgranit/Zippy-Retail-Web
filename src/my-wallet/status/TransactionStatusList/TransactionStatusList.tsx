import {
  Button,
  Col,
  FormControl,
  Row,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import PageContainer from '../../../common/PageContainer';
import Api from '../../../api';
import { TransferTypeEnum } from '../../../constants/enum/TransferTypeEnum';
import { Transaction } from '../../../constants/type/Transaction';
import { TransactionStatusEnum } from '../../../constants/enum/TransactionStatusEnum';
import { TransactionTypePastTenseEnum } from '../../../constants/enum/TransactionTypePastTenseEnum';
import { DirectionTypeEnum } from '../../../constants/enum/DirectionTypeEnum';

export interface TransactionInterface {
  type: TransactionTypePastTenseEnum;
}

export default function TransactionStatusList() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { type = TransactionTypePastTenseEnum.ALL } = useParams<Partial<TransactionInterface>>();
  const api = new Api(instance, accounts[0]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactionList, setFilteredTransactionList] = useState<Transaction[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');

  const filter = (value: string, transactionsList: Array<Transaction>) => {
    setSearchValue(value);
    setFilteredTransactionList(transactionsList.filter((transaction) => {
      const search = value.toLowerCase();
      return transaction?.contact?.firstName?.toLowerCase().includes(search)
        || transaction?.contact?.lastName?.toLowerCase().includes(search)
        || transaction?.contact?.email?.toLowerCase().includes(search);
    }));
  };

  const getTransations = (transferType: TransferTypeEnum) => {
    setIsProcessing(true);
    api
      .getTransfers(transferType)
      .then((data) => {
        setIsProcessing(false);
        const transactionList = data.sort((a: Transaction, b: Transaction) => {
          const valueA = DateTime.fromISO(a.date).valueOf();
          const valueB = DateTime.fromISO(b.date).valueOf();
          return valueA - valueB;
        }).reverse();

        setTransactions(transactionList);
        setSearchValue('');
        filter('', transactionList);
      });
  };

  const getUserFullName = (transaction: Transaction): string => {
    const contact = transaction?.contact;
    return contact && contact.firstName && contact.lastName ? `${contact.firstName} ${contact.lastName}` : '';
  };

  const getEquivalentStatus = (status: TransactionStatusEnum): string => {
    switch (status.toLowerCase()) {
      case TransactionStatusEnum.COMPLETED:
        return TransactionStatusEnum.COMPLETED;
      case TransactionStatusEnum.CANCELLED:
        return TransactionStatusEnum.CANCELLED;
      case TransactionStatusEnum.FAILED:
        return TransactionStatusEnum.FAILED;
      case TransactionStatusEnum.PENDING:
      default:
        return TransactionStatusEnum.PENDING;
    }
  };

  const getTransactionType = (transaction: Transaction): string => {
    switch (transaction.direction.toLowerCase().replace(/^./, transaction.direction[0].toUpperCase())) {
      case DirectionTypeEnum.OUTBOUND:
        return 'sent';
      case DirectionTypeEnum.INBOUND:
      default:
        return 'requested';
    }
  };

  const pastToPresent = (transactionType: TransactionTypePastTenseEnum): TransferTypeEnum => {
    switch (transactionType.toLowerCase()) {
      case TransactionTypePastTenseEnum.RECEIVED:
        return TransferTypeEnum.RECEIVE;
      case TransactionTypePastTenseEnum.REQUESTED:
        return TransferTypeEnum.REQUEST;
      case TransactionTypePastTenseEnum.ALL:
        return TransferTypeEnum.ALL;
      case TransactionTypePastTenseEnum.SENT:
      default:
        return TransferTypeEnum.SEND;
    }
  };

  useEffect(() => {
    getTransations(pastToPresent(type as TransactionTypePastTenseEnum));
  }, [type]);

  return (
    <>
      <PageContainer
        title="Transactions History"
        className="status-list"
        backdropImage="backdrop-image-3"
      >
        <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
          <Button
            className={type === TransactionTypePastTenseEnum.ALL ? 'active' : ''}
            onClick={() => navigate('/my-wallet/transaction-history')}
            disabled={type === TransactionTypePastTenseEnum.ALL}
          >
            All
          </Button>
          <Button
            className={type === TransactionTypePastTenseEnum.SENT ? 'active' : ''}
            onClick={() => navigate(`/my-wallet/transaction-history/${TransactionTypePastTenseEnum.SENT}`)}
            disabled={type === TransactionTypePastTenseEnum.SENT}
          >
            Send
          </Button>
          <Button
            className={type === TransactionTypePastTenseEnum.RECEIVED ? 'active' : ''}
            onClick={() => navigate(`/my-wallet/transaction-history/${TransactionTypePastTenseEnum.RECEIVED}`)}
            disabled={type === TransactionTypePastTenseEnum.RECEIVED}
          >
            Received
          </Button>
          <Button
            className={type === TransactionTypePastTenseEnum.REQUESTED ? 'active' : ''}
            onClick={() => navigate(`/my-wallet/transaction-history/${TransactionTypePastTenseEnum.REQUESTED}`)}
            disabled={type === TransactionTypePastTenseEnum.REQUESTED}
          >
            Requested
          </Button>
        </div>
        <div className="transaction-search">
          <i className="zippy-cash-icon zc-search" />
          <FormControl
            placeholder="Search..."
            value={searchValue}
            onChange={(evt) => filter(evt.target.value, transactions)}
          />
        </div>
        <div className="status-list-container">
          <SimpleBar className="simplebar-container" forceVisible="y" autoHide={false}>
            {!isProcessing ? (
              filteredTransactionList.map((item: Transaction) => (
                <Link
                  key={item.id}
                  to={`/my-wallet/transaction-history/${getTransactionType(item)}/${getEquivalentStatus(item.status)}/${item.id}`}
                  state={{ type }}
                  className="transaction-items"
                >
                  <Row>
                    <Col xs={1} className="status-icon">
                      <i className={`zippy-cash-icon zc-${getEquivalentStatus(item.status)}`} />
                    </Col>
                    <Col xs={10}>
                      <Row>
                        <Col xs={7} className="name">{getUserFullName(item)}</Col>
                        <Col xs={5} className="amount">
                          {item.direction === DirectionTypeEnum.OUTBOUND ? '- ' : ''}
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
                          {`Reference No. ${item.id}`}
                        </Col>
                        <Col xs={5} className="date">
                          <span>{item && item.createdDate ? DateTime.fromISO(item.createdDate).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={1} className="info-icon">
                      <i className="zippy-cash-icon zc-info" />
                    </Col>
                  </Row>
                </Link>
              ))
            ) : 'loading...'}
            {!isProcessing && filteredTransactionList.length === 0 ? 'no record' : ''}
          </SimpleBar>
        </div>
      </PageContainer>
    </>
  );
}
