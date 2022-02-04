import { Button, Col, Row } from 'react-bootstrap';
import PageContainer from '../../../common/PageContainer';

export default function LoadStatus() {
  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
      <div className="title">
        Load wallet
      </div>
      <div className="details">
        <Row>
          <Col xs={12}>Your $50 credited into your zippy account</Col>
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
        >
          Close
        </Button>
      </div>
    </PageContainer>
  );
}
