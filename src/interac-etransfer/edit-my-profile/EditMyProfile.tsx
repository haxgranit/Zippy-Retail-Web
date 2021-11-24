import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';

const Divider = () => <div className="border-top my-3" />;

const LeftCol = () => (
  <Col xs={9}>
    <Row>
      <Col>
        <b>Step: 1 - 2</b>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        <ul>
          <li>
            To make changes, enter the information over the existing text and select
            &quot;Next&quot;
          </li>
          <li>
            Updating this page will change the personal information you have on record with CIBC
          </li>
        </ul>
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col xs={3}>Legal Name:</Col>
      <Col xs={6}>DUANE TOUGH</Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Email Nickname:</Col>
      <Col xs={6}>
        <Form.Control type="text" value="DUANE TOUGH" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Email Address:</Col>
      <Col xs={6}>
        <Form.Control type="text" value="dtough@hotmail.com" />
      </Col>
    </Row>
    <Row className="mt-2">
      <Col xs={3} />
      <Col xs={9}>
        <i>Interac</i>
        {' '}
        e-Transfer uses email notifications to provide the status of the transfer. This email will
        be used as the email address on your profile.
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Text Message Notification:</Col>
      <Col xs={6}>
        <Form.Check
          id="text-message-notification"
          type="checkbox"
          label="Also send me text message notifications (email sent by default)."
        />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <Button variant="outline-primary">Cancel</Button>
      </Col>
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
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      Stop a payment &gt;
      <br />
      Make an additional loan payment &gt;
      <br />
      Order cheques &gt;
    </div>
  </Col>
);

export default function EditMyProfile() {
  return (
    <div>
      <Row>
        <Col>
          <h2>EDIT MY PROFILE</h2>
        </Col>
      </Row>
      <Row>
        <LeftCol />
        <RightCol />
      </Row>
    </div>
  );
}
