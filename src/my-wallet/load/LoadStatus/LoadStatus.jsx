import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';

export default function LoadStatus() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
      <div className="title">
        Fund Transfer
      </div>
      <div className="details">
        <Row>
          <Col xs={12}>
            Your $
            {state?.amount}
            {' '}
            credited into your zippy account
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            Your total available Zippy balance is
            {' '}
            <b>$200</b>
          </Col>
        </Row>
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
