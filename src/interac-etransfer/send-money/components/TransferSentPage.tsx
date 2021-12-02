import {
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

const TransferSentPage = ({
  setRealStep,
  setCurrentStep,
}: any): JSX.Element => (
  <>
    <div className="d-flex align-items-center">
      <div
        style={{
          width: 20,
          height: 25,
          border: '1px dotted grey',
          textAlign: 'center',
          marginRight: 10,
        }}
      >
        P
      </div>
      <h4>Your transfer has been sent</h4>
    </div>
    <p>
      If you opted to send a notification of your transfer, your contact will
      receive it shortly.
    </p>
    <p>This transfer is final and can&apos;t be recalled.</p>
    <Row className="mt-4">
      <Col md={4}>
        <Form.Label>From:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>DUANE TOUGH</Form.Label>
        <p>dtough@hotmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Your Email Nickname:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>CHELSEA TOUGH</Form.Label>
        <p>chelsea.tough@gmail.com</p>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Account Balance:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,260.57</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Amount:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>$1,000.00</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>From Account:</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>Cheguing (01702-81-99639)</Form.Label>
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Reference Number:(keep for your records)</Form.Label>
      </Col>
      <Col md={8}>
        <Form.Label>3942439898</Form.Label>
      </Col>
    </Row>
    <p className="mt-4">Submitted: November 9, 2021 at 6:44 p.m. ET.</p>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
        >
          Check Status
        </Button>
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => {
            setRealStep(1);
            setCurrentStep(1);
          }}
        >
          Send another transfer
        </Button>
      </Col>
    </Row>
    <Row>
      <Col md={8}>
        <h4>
          It&apos;s safe and easy to get Interac e-Transfer funds deposited
          directly into your account
        </h4>
        <a href="/" className="text-danger">
          Register for Autodeposit
          {'>'}
        </a>
      </Col>
      <Col md={4}>
        <div style={{ width: '100%', height: 150, border: '1px dotted grey' }}>
          p
        </div>
      </Col>
    </Row>
  </>
);

export default TransferSentPage;
