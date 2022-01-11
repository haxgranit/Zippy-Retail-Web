import {
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { DateTime } from 'luxon';
import CommonPageContainer from '../../../../common/CommonPageContainer';
import Breadcrumbs, { Crumb } from '../../../../common/Breadcrumbs';
import Api, { Transaction } from '../../../../api';
import { useAppSelector } from '../../../../app/hooks';
import { selectUser, UserState } from '../../../../features/user/userSlice';
import QuickLinks from '../../components/QuickLinks';

export default function SentCompleted() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const { id } = useParams();
  const { instance, accounts } = useMsal();
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);
  let user: any;
  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const getUserEmail = () => (user && user.email ? user.email : '');

  const crumbs = [
    { label: 'Status', link: '/interac-etransfer/status' },
    { label: 'Sent Money', link: '/interac-etransfer/status/sent' },
    { label: 'Transfer Sent' },
  ] as Array<Crumb>;

  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransaction(Number(id))
      .then((data) => setTransaction(data));
  }, []);

  if (isAuthenticated) {
    ({ user } = useAppSelector(selectUser));
  } else {
    ({ user } = {
      user: {
        firstName: null,
        lastName: null,
        email: null,
      } as any,
    } as unknown as UserState);
  }

  return (
    <>
      <CommonPageContainer title="Status">
        <Row>
          <Col xs={9} className="transaction-details">
            <Breadcrumbs
              crumbs={crumbs}
            />
            <h2>Transaction Request</h2>
            <div className="details">
              <Row>
                <Col xs={4}>From</Col>
                <Col xs={6}>
                  <strong>{getUserFullName()}</strong>
                  {user && ` (${getUserEmail()})`}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>To</Col>
                <Col xs={6}>
                  <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>Transfer Date</Col>
                <Col xs={6}>
                  {transaction && transaction.date ? DateTime.fromISO(transaction.date).toLocaleString(DateTime.DATE_MED) : ''}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>Transfer Amount</Col>
                <Col xs={6}>
                  <strong className="amount">
                    {transaction && transaction.amount ? `$${transaction.amount} CAD` : ''}
                  </strong>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div>Reference Number</div>
                  <div>(Keep For Your Records)</div>
                </Col>
                <Col xs={6}>{transaction?.id}</Col>
              </Row>
            </div>
            <Stack gap={3} direction="horizontal">
              <Button
                className="zippy-btn d-flex"
                onClick={() => navigate('/interac-etransfer/status')}
              >
                Back
              </Button>
              <Button
                className="zippy-btn d-flex ms-auto"
                onClick={() => navigate('/interac-etransfer/send-money/details')}
              >
                Send Another Transfer
              </Button>
            </Stack>
          </Col>
          <Col xs={3}>
            <QuickLinks />
            <div className="quick-tips">
              <h4>Your Interac e-Transfer Details</h4>
              <ul>
                <li>
                  You can also view information about your Interac® e-Transfer on the
                  &quot;Account Details&quot; page. Select the account from which you made the
                  transfer to view the details of your transfer in the list of
                  transactions
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </>
  );
}
