import { useEffect, useState } from 'react';
import {
  Tabs, Tab, Table, Button, Row,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { useMsal } from '@azure/msal-react';
import styled from 'styled-components';
import Api, { Transaction, TransferType } from '../../../api';
import CommonHeader from '../../../common/CommonHeader';
import MonthSelectComponent from '../../../common/MonthSelectComponent';
import { formatContactName } from '../../../Helpers';

const BorderedTR = styled.tr`
  borderTop: '1px solid #c5c5c5'
`;

const SentTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.SEND)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <MonthSelectComponent />
      <Table className="mt-2">
        <thead>
          <BorderedTR className="bg-light">
            <th>Date Sent</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Status</th>
          </BorderedTR>
        </thead>
        <tbody className="border-top-0">
          {transactions.map((item: Transaction) => (
            <tr key={item.id}>
              <td>{DateTime.fromISO(item.date).toLocaleString(DateTime.DATE_MED)}</td>
              <td>
                <div>{formatContactName(item.contact?.firstName, item.contact?.lastName)}</div>
                <div>{item.contact?.email}</div>
              </td>
              <td>
                <NumberFormat
                  value={item.amount}
                  displayType="text"
                  prefix="$"
                  thousandSeparator
                />
              </td>
              <td>
                <Button
                  variant="link"
                  className="text-black"
                  onClick={() => navigate(`/interac-etransfer/send-money/transfer-sent-complete/${item.id}`)}
                >
                  Transfer Completed
                </Button>
              </td>
            </tr>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">No Transactions</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div>
        <Row className="d-flex justify-content-end">
          <Button
            variant="danger"
            className="d-flex"
            style={{ width: 'auto', marginRight: 10 }}
            onClick={() => navigate('/interac-etransfer/send-money/details')}
          >
            Send Money
          </Button>
        </Row>
      </div>
    </>
  );
};

const ReceivedTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.RECEIVE)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <MonthSelectComponent />
      <Table className="mt-2">
        <thead>
          <BorderedTR
            className="bg-light"
          >
            <th>Date Received</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Status</th>
          </BorderedTR>
        </thead>
        <tbody className="border-top-0">
          {transactions.map((item: Transaction) => (
            <tr key={item.id}>
              <td>{DateTime.fromISO(item.date).toLocaleString(DateTime.DATE_MED)}</td>
              <td>
                <div>{formatContactName(item.contact?.firstName, item.contact?.lastName)}</div>
                <div>{item.contact?.email}</div>
              </td>
              <td>
                <NumberFormat
                  value={item.amount}
                  displayType="text"
                  prefix="$"
                  thousandSeparator
                />
              </td>
              <td>
                <Button
                  variant="link"
                  className="text-black"
                  onClick={() => navigate(`/interac-etransfer/send-money/transfer-sent-complete/${item.id}`)}
                >
                  Transfer Completed
                </Button>
              </td>
            </tr>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">No Transactions</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

const RequestedTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.REQUEST)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <MonthSelectComponent />
      <Table className="mt-2">
        <thead>
          <BorderedTR
            className="bg-light"
          >
            <th>Date Requested</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Status</th>
          </BorderedTR>
        </thead>
        <tbody className="border-top-0">
          {transactions.map((item: Transaction) => (
            <tr key={item.id}>
              <td>{DateTime.fromISO(item.date).toLocaleString(DateTime.DATE_MED)}</td>
              <td>
                <div>{formatContactName(item.contact?.firstName, item.contact?.lastName)}</div>
                <div>{item.contact?.email}</div>
              </td>
              <td>
                <NumberFormat
                  value={item.amount}
                  displayType="text"
                  prefix="$"
                  thousandSeparator
                />
              </td>
              <td>
                <Button
                  variant="link"
                  className="text-black"
                  onClick={() => navigate(`/interac-etransfer/status/request-sent/${item.id}`)}
                >
                  Requested
                </Button>
              </td>
            </tr>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">No Transactions</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div>
        <Row className="d-flex justify-content-end">
          <Button
            variant="danger"
            className="d-flex"
            style={{ width: 'auto', marginRight: 10 }}
            onClick={() => navigate('/interac-etransfer/request-money')}
          >
            Request Money
          </Button>
        </Row>
      </div>
    </>
  );
};

export default function InteracETransferDetails() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { tabId } = useParams();
  const selectedTabId = tabId || undefined;

  return (
    <>
      <CommonHeader title="STATUS" print={false} />
      <div>
        <h4>Your Interac e-Transfer Details</h4>
        <ul>
          <li>
            To learn more about the status of an Interac e-Transfer, or to take
            action on any of your transfers, select the text link under the
            status column.
          </li>
          <li>
            You can also view information about your Interac e-Transfer on the
            &quot;Account Details&quot; page. Select the account from which you
            made the transfer to view the details of your transfer in the list
            of transactions
          </li>
        </ul>
        <p>
          Note: The(Requested) status refers to a transfer you sent in response
          to a request for money
        </p>
      </div>
      <Tabs
        defaultActiveKey={selectedTabId || 'sent'}
        transition={false}
        id="status-tab"
        className="mt-2 mb-3"
        onSelect={(tabKey) => {
          navigate(`/interac-etransfer/status/${tabKey}`);
        }}
      >
        <Tab eventKey="sent" title="Sent">
          <SentTabContent
            navigate={navigate}
            instance={instance}
            accounts={accounts}
          />
        </Tab>
        <Tab eventKey="received" title="Received">
          <ReceivedTabContent
            navigate={navigate}
            instance={instance}
            accounts={accounts}
          />
        </Tab>
        <Tab eventKey="requested" title="Requested">
          <RequestedTabContent
            navigate={navigate}
            instance={instance}
            accounts={accounts}
          />
        </Tab>
      </Tabs>
    </>
  );
}
