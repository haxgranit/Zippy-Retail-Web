import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import SuccessIcon from '../../../assets/img/icons/status-icons/completed.svg';
import PendingIcon from '../../../assets/img/icons/status-icons/pending.svg';
import FailedIcon from '../../../assets/img/icons/status-icons/failed.svg';

export default function LoadStatus() {
  // eslint-disable-next-line prefer-destructuring
  const state: any = useLocation().state;
  const navigate = useNavigate();
  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
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
        <Button
          className="zippy-btn"
          onClick={() => navigate('/')}
        >
          Close
        </Button>
      </div>
    </PageContainer>
  );
}
