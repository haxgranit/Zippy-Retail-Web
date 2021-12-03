import {
  Col,
  Modal,
  Row,
  Button,
} from 'react-bootstrap';

export interface SendMoneyVerificationModalProps {
  show: boolean;
  handleClose: () => void;
  handleNext: () => void;
  handleBack: () => void;
}
const SendMoneyVerificationModal = ({
  show,
  handleClose,
  handleNext,
  handleBack,
}: SendMoneyVerificationModalProps) => (
  <Modal show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <Row style={{ padding: '15px' }}>
        <h2>SEND MONEY - VERIFICATION</h2>
        <div>
          <p>
            Verify that the information below is accurate and select Send Money
          </p>
          <p>Note: You can&apos;t recall the transfer after it&apos;s sent.</p>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>From:</p>
            </Col>
            <Col>
              <p>DUANE TOUGH</p>
              <p>dtough@hotmail.com</p>
            </Col>
          </Row>
          <hr style={{ marginTop: '0px' }} />
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>To:</p>
            </Col>
            <Col>
              <p>CHELSEA TOUGH</p>
              <p>chelsea.tough@gmail.com</p>
            </Col>
          </Row>
          <hr style={{ marginTop: '0px' }} />
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>Amount:</p>
            </Col>
            <Col>
              <p>$1,000.00</p>
            </Col>
          </Row>
          <hr style={{ marginTop: '0px' }} />
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>From Account:</p>
            </Col>
            <Col>
              <p>Chequing (01702-81-99639)</p>
            </Col>
          </Row>
        </div>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
          backgroundColor: '#EAEAEA',
          padding: '0px',
          margin: '0px',
        }}
      >
        <Col style={{ padding: '15px' }}>
          <Button
            variant="link"
            onClick={handleClose}
            style={{
              borderRadius: '4px',
              color: 'black',
              padding: '5px 12px',
              textDecoration: 'none',
            }}
          >
            <i />
            Cancel
          </Button>
        </Col>
        <Col style={{ textAlign: 'end', padding: '15px' }}>
          <button
            type="button"
            style={{
              marginRight: '15px',
              borderRadius: '4px',
              borderColor: '#C41F3E',
              color: '#C41F3E',
              padding: '5px 12px',
            }}
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            style={{
              borderRadius: '4px',
              padding: '5px 12px',
              backgroundColor: '#C41F3E',
              borderColor: '#C41F3E',
              color: 'white',
            }}
            onClick={handleNext}
          >
            Send Money
          </button>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

export default SendMoneyVerificationModal;
