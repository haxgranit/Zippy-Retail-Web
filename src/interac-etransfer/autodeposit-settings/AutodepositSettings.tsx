import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';

const Divider = () => <div className="border-primary my-3" style={{ borderTop: '1px solid' }} />;

const LeftCol = () => (
  <Col xs={9}>
    <Row>
      <Col>
        <h4 className="mt-4">Register for Autodeposit</h4>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        Want the funds you receive to be automatically deposited into your account, without signing
        on or answering security questions? Try Autodeposit. A notification will be sent to your
        contact method whenever a transfer is deposited to the bank account you select. You can
        register up to 5 email addresses and mobile phone numbers for Autodeposit.
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col xs={3}>Choose contact method:</Col>
      <Col xs={6}>
        <Form.Check type="radio" name="display" id="contact-email" label="Email" />
        <Form.Check type="radio" name="display" id="contact-phone" label="Mobile phone number" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Enter your email Address:</Col>
      <Col xs={6}>
        <Form.Control type="text" value="dtough@hotmail.com" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Automatically Deposit To:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Select account</option>
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Your Legal Name:</Col>
      <Col xs={9}>DUANE TOUGH</Col>
    </Row>
    <Row className="mt-4">
      <Col>
        By registering, I understand that my legal name (where applicable) and email address or
        mobile phone number will display to anyone who sends me money through
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer.
        <br />
        <br />
        You may still be asked to answer a security question when receiving money from financial
        institutions that don&apos;t fully support Autodeposit.
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col className="text-end">
        <Button>Send Request</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <b>Note:</b>
        <br />
        Your use of
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer is subject to the
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer Terms and conditions (PDF, 197 KB).
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border border-primary p-2 rounded">
      <b>You can also:</b>
      <br />
      Change your contact information &gt;
      <br />
      Change your statement preferences &gt;
      <br />
      View upcoming bill payments and transfers &gt;
    </div>
  </Col>
);

export default function AutodepositSettings() {
  return (
    <div>
      <Row>
        <Col>
          <h2>SETUP AUTODEPOSIT</h2>
        </Col>
      </Row>
      <Row>
        <LeftCol />
        <RightCol />
      </Row>
    </div>
  );
}
