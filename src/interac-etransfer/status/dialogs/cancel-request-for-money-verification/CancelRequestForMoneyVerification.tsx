import {
  Col,
  Modal,
  Row,
  Button,
  Stack,
} from 'react-bootstrap';

export interface CancelRequestForMoneyVerificationProps {
  show: boolean;
  handleCancelRequest: () => void;
  handleBack: () => void;
}

const Divider = () => <div className="border-top my-3" />;

const CancelRequestForMoneyVerification = ({
  show,
  handleCancelRequest,
  handleBack,
}: CancelRequestForMoneyVerificationProps) => (
  <Modal show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <Row style={{ padding: '15px' }}>
        <h2>Cancel Request For Money - VERIFICATION</h2>
        <div>
          <p>Are you sure you want to cancel this request for money?</p>
          <Row className="align-items-center mt-4">
            <Col xs={4}>TO:</Col>
            <Col xs={6}>
              Kent Ulrich
            </Col>
          </Row>
          <Divider />
          <Row className="align-items-center">
            <Col xs={4}>Amount:</Col>
            <Col xs={6}>$10.00</Col>
          </Row>
          <Divider />
          <Row className="align-items-center">
            <Col xs={4}>Email Address:</Col>
            <Col xs={6}>kentu@shaw.ca</Col>
          </Row>
        </div>
      </Row>
      <div style={{
        backgroundColor: '#EAEAEA',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexFlow: 'row-reverse',
      }}
      >
        <Stack gap={3} direction="horizontal" style={{ margin: '16px' }}>
          <Button variant="outline-danger" onClick={handleBack}>
            Back
          </Button>
          <Button variant="danger" onClick={handleCancelRequest}>
            Cancel Request
          </Button>
        </Stack>
      </div>
    </Modal.Body>
  </Modal>
);

export default CancelRequestForMoneyVerification;
