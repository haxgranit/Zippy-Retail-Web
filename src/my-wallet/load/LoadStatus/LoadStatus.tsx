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
    <PageContainer title="Personal Account" subTitle="Made Fun With Zippy!">
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
              Your $
              {state?.amount}
              {' '}
              credit into your zippy account
            </Col>
          </Row>
        )}
        {state.status === 'pending' && (
          <Row>
            <Col xs={12}>
              Your $
              {state?.amount}
              {' '}
              {mode === 'load' ? 'credited' : 'debit'}
              {' '}
              request is in progress
            </Col>
          </Row>
        )}
        {state.status === 'failed' && (
          <>
            <Row>
              <Col xs={12}>
                Payment failed
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                Your money has not been credited
              </Col>
            </Row>

          </>
        )}
        {(state.status === 'completed' || state.status === 'pending') && (
          <Row>
            <Col xs={12}>
              Your total available Zippy balance is
              {' '}
              <b>
                $
                {account?.balance}
              </b>
            </Col>
          </Row>
        )}
      </div>

      <div className="action">
        {state.status !== 'failed' ? (
          <Button
            className="zippy-btn"
            onClick={() => navigate('/my-wallet/load/transfer-details', {
              state: { id: state.id, sourceId: state.sourceId },
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
