import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import PageContainer from '../../../common/PageContainer';
import Api from '../../../api';

export default function LoadStatus() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [state, setState] = useState<any>(useLocation().state);
  function retryPayment() {
    new Api(instance, accounts[0])
      .postFundingSourceTransaction(state.amount, state.sourceId)
      .then(() => {
        setState({ ...state, status: 'completed' });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

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
              credited request is in progress
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
        {/* hiding it for tim being */}
        {/* {(state.status === 'completed' || state.status === 'pending') && (
          <Row>
            <Col xs={12}>
              Your total available Zippy balance is
              {' '}
              <b>$200</b>
            </Col>
          </Row>
        )} */}
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
