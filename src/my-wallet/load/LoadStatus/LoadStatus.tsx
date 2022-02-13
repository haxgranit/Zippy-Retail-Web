import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import PageContainer from '../../../common/PageContainer';
import SuccessIcon from '../../../assets/img/icons/status-icons/completed.svg';
import PendingIcon from '../../../assets/img/icons/status-icons/pending.svg';
import FailedIcon from '../../../assets/img/icons/status-icons/failed.svg';
import Api from '../../../api';

export default function LoadStatus() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [state, setState] = useState<any>(useLocation().state);
  function retryPayment() {
    new Api(instance, accounts[0])
      .postFundLoadTransaction(state)
      .then(() => {
        setState({ ...state, status: 'Success' });
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
        {state.status === 'In_Progress' && (
          <img height={40} width={40} src={PendingIcon} alt="Pending Icon" />
        )}
        {state.status === 'Success' && (
          <img height={60} width={60} src={SuccessIcon} alt="Success Icon" />
        )}
        {state.status === 'Failure' && (
          <img height={30} width={30} src={FailedIcon} alt="Failed Icon" />
        )}
      </div>
      <div className="details">
        {state.status === 'Success' && (
          <Row>
            <Col xs={12}>
              Your $
              {state?.amount}
              {' '}
              credited into your zippy account
            </Col>
          </Row>
        )}
        {state.status === 'In_Progress' && (
          <Row>
            <Col xs={12}>
              Your $
              {state?.amount}
              {' '}
              credited request is in progress
            </Col>
          </Row>
        )}
        {state.status === 'Failure' && (
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
        {(state.status === 'Success' || state.status === 'In_Progress') && (
          <Row>
            <Col xs={12}>
              Your total available Zippy balance is
              {' '}
              <b>$200</b>
            </Col>
          </Row>
        )}
      </div>

      <div className="action">
        {state.status !== 'Failure' ? (
          <Button
            className="zippy-btn"
            onClick={() => navigate('/')}
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
