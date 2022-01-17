import { useEffect, useState } from 'react';
import {
  Tabs, Tab, Table, Button, Row, Col,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { useMsal } from '@azure/msal-react';
import styled from 'styled-components';
import Api, { Transaction, TransferType } from '../../../api';
import MonthSelectComponent from '../../../common/MonthSelectComponent';
import { formatContactName } from '../../../Helpers';
import CommonPageContainer from '../../../common/CommonPageContainer';
import Breadcrumbs, { Crumb } from '../../../common/Breadcrumbs';
import QuickLinks from '../components/QuickLinks';

const BorderedTR = styled.tr`
  borderTop: '1px solid #c5c5c5'
`;

const SentTabContent = ({
  navigate,
  instance,
  accounts,
}: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.SEND)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <MonthSelectComponent prefix="sent" />
      <Table className="mt-2">
        <thead>
          <BorderedTR className="bg-light">
            <th>Date Sent here</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Status</th>
          </BorderedTR>
        </thead>
        <tbody className="border-top-0">
          {transactions.map((item: Transaction) => (
            <tr key={`sent_${item.id}`}>
              <td>{DateTime.fromISO(item.date).toLocaleString(DateTime.DATE_MED)}</td>
              <td>
                <div>{formatContactName(item.contact?.firstName, item.contact?.lastName)}</div>
                <div>{item.contact?.email}</div>
              </td>
              <td>
                <NumberFormat
                  value={item.amount}
                  defaultValue={0}
                  displayType="text"
                  prefix="$ "
                  suffix=" CAD"
                  thousandSeparator
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
              <td>
                <Button
                  className="zippy-btn zippy-flat transaction-status w-full"
                  variant="completed"
                  onClick={() => navigate(`/interac-etransfer/status/sent/completed/${item.id}`)}
                >
                  Transfer Sent
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
            className="zippy-btn d-flex"
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

const ReceivedTabContent = ({
  navigate,
  instance,
  accounts,
}: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.RECEIVE)
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <MonthSelectComponent prefix="received" />
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
            <tr key={`received_${item.id}`}>
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
                  className="zippy-btn zippy-flat transaction-status w-full"
                  variant="completed"
                  onClick={() => navigate(`/interac-etransfer/status/received/completed/${item.id}`)}
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

const RequestedTabContent = ({
  navigate,
  instance,
  accounts,
}: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.REQUEST)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <MonthSelectComponent prefix="requested" />
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
            <tr key={`requested_${item.id}`}>
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
                  className="zippy-btn zippy-flat transaction-status w-full"
                  variant="completed"
                  onClick={() => navigate(`/interac-etransfer/status/requested/pending/${item.id}`)}
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
            className="zippy-btn d-flex"
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
  const selectedTabId = tabId || 'sent';

  const crumbLabels = {
    sent: 'Transfer Sent',
    received: 'Transfer Received',
    requested: 'Requested Money',
  } as any;

  return (
    <>
      <CommonPageContainer title="Status">
        <Row>
          <Col xs={9}>
            <Breadcrumbs
              crumbs={
                [
                  { label: 'Status', link: '/interac-etransfer/status' },
                  { label: crumbLabels[selectedTabId] },
                ] as Array<Crumb>
              }
            />
            <Tabs
              defaultActiveKey={selectedTabId || 'sent'}
              transition={false}
              id="status-tab"
              className="mt-2 mb-3"
              onSelect={(tabKey) => {
                navigate(`/interac-etransfer/status/${tabKey}`);
              }}
            >
              <Tab eventKey="sent" title="Transfer Sent">
                <SentTabContent
                  navigate={navigate}
                  instance={instance}
                  accounts={accounts}
                />
              </Tab>
              <Tab eventKey="received" title="Transfer Received">
                <ReceivedTabContent
                  navigate={navigate}
                  instance={instance}
                  accounts={accounts}
                />
              </Tab>
              <Tab eventKey="requested" title="Requested Money">
                <RequestedTabContent
                  navigate={navigate}
                  instance={instance}
                  accounts={accounts}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col xs={3}>
            <QuickLinks />
            <div className="quick-tips">
              <h4>Your Interac e-Transfer Details</h4>
              <ul>
                <li>
                  To learn more about the status of an Interac® e-Transfer, or to take
                  action on any of your transfers, select the text link under the status
                  column.
                </li>
                <li>
                  You can also view information about your Interac® e-Transfer on the Account
                  Details page. Select the account from which you made the transfer to view
                  the details of your transfer in the list of transactions.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </>
  );
}
