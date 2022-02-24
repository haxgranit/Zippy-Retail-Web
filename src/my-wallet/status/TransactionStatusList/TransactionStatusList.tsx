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
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import PageContainer from '../../../common/PageContainer';
import Api from '../../../api';
import { TransferTypeEnum } from '../../../constants/enum/TransferTypeEnum';
import { Transaction } from '../../../constants/type/Transaction';
import { TransactionStatusEnum } from '../../../constants/enum/TransactionStatusEnum';

export default function TransactionStatusList() {
  const { instance, accounts } = useMsal();
  const api = new Api(instance, accounts[0]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactionList, setFilteredTransactionList] = useState<Transaction[]>([]);
  const [selectedType, setSelectedType] = useState<TransferTypeEnum>(TransferTypeEnum.ALL);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');

  const filter = (value: string, transactionsList: Array<Transaction>) => {
    setSearchValue(value);
    setFilteredTransactionList(transactionsList.filter((transaction) => {
      const search = value.toLowerCase();
      return transaction?.contact.firstName?.toLowerCase().includes(search)
        || transaction?.contact.lastName?.toLowerCase().includes(search)
        || transaction?.contact.email?.toLowerCase().includes(search);
    }));
  };

  const getTransations = (type: TransferTypeEnum) => {
    setSelectedType(type);
    setIsProcessing(true);
    api
      .getInteracEtransferTransactions(type)
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
    switch (status) {
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
    const type = transaction.type?.toLowerCase() || selectedType;
    switch (type) {
      case TransferTypeEnum.RECEIVE:
        return 'received';
      case TransferTypeEnum.SEND:
        return 'sent';
      case TransferTypeEnum.REQUEST:
        return 'requested';
      default:
        return 'sent';
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
            className={selectedType === TransferTypeEnum.ALL ? 'active' : ''}
            onClick={() => getTransations(TransferTypeEnum.ALL)}
            disabled={selectedType === TransferTypeEnum.ALL}
          >
            All
          </Button>
          <Button
            className={selectedType === TransferTypeEnum.SEND ? 'active' : ''}
            onClick={() => getTransations(TransferTypeEnum.SEND)}
            disabled={selectedType === TransferTypeEnum.SEND}
          >
            Send
          </Button>
          <Button
            className={selectedType === TransferTypeEnum.RECEIVE ? 'active' : ''}
            onClick={() => getTransations(TransferTypeEnum.RECEIVE)}
            disabled={selectedType === TransferTypeEnum.RECEIVE}
          >
            Received
          </Button>
          <Button
            className={selectedType === TransferTypeEnum.REQUEST ? 'active' : ''}
            onClick={() => getTransations(TransferTypeEnum.REQUEST)}
            disabled={selectedType === TransferTypeEnum.REQUEST}
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
                <Link key={item.id} to={`/my-wallet/status/${getTransactionType(item)}/${getEquivalentStatus(item.status)}/${item.id}`} className="transaction-items">
                  <Row>
                    <Col xs={1} className="status-icon">
                      <i className={`zippy-cash-icon zc-${getEquivalentStatus(item.status)}`} />
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
                          {`Reference No. ${item.id}`}
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
                </Link>
              ))
            ) : 'loading'}
          </SimpleBar>
        </div>
      </PageContainer>
    </>
  );
}
