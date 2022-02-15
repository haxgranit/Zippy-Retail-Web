import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import PageContainer from '../../../common/PageContainer';
import Api, { Account } from '../../../api';
import { useAppSelector } from '../../../app/hooks';
import { selectUser } from '../../../features/user/userSlice';

export default function LoadStatus({ mode } : { mode: string }) {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [state, setState] = useState<any>(useLocation().state);
  function retryPayment() {
    new Api(instance, accounts[0])
      .postFundingSourceTransaction(
        { amount: state.amount as number, isCredit: state.isCredit as boolean },
        state.sourceId,
      )
      .then(() => {
        setState({ ...state, status: 'completed' });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const [account, setAccount] = useState<Account | undefined>();
  const { user } = useAppSelector(selectUser);

  useEffect(() => {
    if (user) {
      new Api(instance, accounts[0])
        .listAccounts()
        .then((msalAccounts) => {
          setAccount(msalAccounts[0]);
        });
    }
  }, [user]);

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!">
      <div className="title">
        Fund Transfer
      </div>
      <div className="text-center">
        {state.status === 'pending' && (
          <i className="zippy-cash-icon zc-pending" />
        )}
        {state.status === 'completed' && (
          <i className="zippy-cash-icon zc-completed" />
        )}
        {state.status === 'failed' && (
          <i className="zippy-cash-icon zc-failed" />
        )}
      </div>
      <div className="details">
        {state.status === 'completed' && (
          <Row>
            <Col xs={12}>
              <p className="status-msg">
                Your $
                {state?.amount}
                {' '}
                credit into your zippy account
              </p>
            </Col>
          </Row>
        )}
        {state.status === 'pending' && (
          <Row>
            <Col
              xs={12}
            >
              <p className="status-msg">
                Your $
                {state?.amount}
                {' '}
                Zippy
                {' '}
                {mode === 'load' ? 'credited' : 'debit'}
                {' '}
                request is in process.

              </p>
            </Col>
          </Row>
        )}
        {state.status === 'failed' && (
        <Row>
          <Col
            xs={12}
          >
            <p className="status-msg">
              Your $
              {state?.amount}
              {' '}
              Zippy credit request
              has been failed.
            </p>
          </Col>
        </Row>
        )}
        {(state.status === 'completed' || state.status === 'pending') && (
          <Row>
            <Col xs={12} style={{ color: '#000000', padding: '0px 90px' }}>
              <p className="balance-msg">
                Your total available Zippy balance is
                {' '}
                <br />
                <b>
                  $
                  {account?.balance}
                  .00
                </b>
              </p>
            </Col>
          </Row>
        )}
      </div>

      <div className="action">
        {state.status !== 'failed' ? (
          <Button
            className="zippy-btn"
            onClick={() => navigate('/my-wallet/load/transfer-details', {
              state: { id: state.id, sourceId: state.sourceId, isCredit: state.isCredit },
            })}
          >
            View Transfer Detail
          </Button>
        ) : (
          <Button
            className="zippy-btn"
            onClick={() => retryPayment()}
          >
            Retry
          </Button>
        )}
      </div>
    </PageContainer>
  );
}

LoadStatus.propTypes = {
  mode: PropTypes.string,
};

LoadStatus.defaultProps = {
  mode: 'load',
};
