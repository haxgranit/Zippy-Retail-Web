import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';

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
          <img height={40} width={40} src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="" />
        )}
        {state.status === 'Success' && (
          <img height={60} width={60} src="https://www.pinclipart.com/picdir/middle/6-65577_cloudy-day-clipart.png" alt="" />
        )}
        {state.status === 'Failure' && (
          <img height={30} width={30} src="https://e7.pngegg.com/pngimages/833/287/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text-thumbnail.png" alt="" />
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
