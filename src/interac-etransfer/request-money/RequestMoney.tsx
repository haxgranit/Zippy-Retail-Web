import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';

const Divider = () => <div className="border-primary my-3" style={{ borderTop: '1px solid' }} />;

const LeftCol = () => (
  <Col xs={9}>
    <b>Step: 1 - 2</b>
    <h4 className="mt-4">Request Money Details</h4>
    <Row className="align-items-center">
      <Col xs={3}>Request Money From:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Select</option>
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Request Amount:</Col>
      <Col xs={6}>
        <Form.Control type="number" placeholder="$" />
      </Col>
    </Row>
    <Row className="align-items-center mt-2">
      <Col xs={3} />
      <Col xs={6}>
        You can request up to $10,000
        <br />
        Financial institutions may have different limits for using
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer. Confirm with your contact that they can send you the amount you&apos;re
        requesting.
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Deposit To:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Select</option>
        </Form.Select>
      </Col>
    </Row>
    <Row className="align-items-center mt-2">
      <Col xs={3} />
      <Col xs={6}>
        If your request is fulfilled, the money will be deposited automatically to your chosen
        account.
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>
        Invoice Due Date (Optional):
      </Col>
      <Col xs={6}>
        <Row>
          <Col xs="auto">
            <Form.Select>
              <option>Month</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select>
              <option>Day</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select>
              <option>Year</option>
            </Form.Select>
          </Col>
        </Row>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>
        Invoice Number (Optional):
      </Col>
      <Col xs={6}>
        <Form.Control type="number" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>
        Message Or Reason For Request (Optional):
      </Col>
      <Col xs={6}>
        <Form.Control as="textarea" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col>
        This is how you will appear in all emails to your
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer contacts. If incorrect,
        {' '}
        <u>edit your profile</u>
        .
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col xs={3}>
        Your Email Nickname:
      </Col>
      <Col xs={6}>
        DUANE TOUGH
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>
        Your Email Address:
      </Col>
      <Col xs={6}>
        dtough@hotmail.com
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col>
        <div className="px-4 py-2" style={{ backgroundColor: '#606366', color: '#fff' }}>
          <Form.Check
            id="confirm"
            type="checkbox"
            label="I confirm that I have an existing relationship with this contact."
          />
        </div>
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col>
        <b>
          Note: You may be charged a fee when your request for money is completed. Fee may not
          apply depending on account terms.
          {' '}
          <u>Review fee details</u>
          .
        </b>
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
      View upcoming bill payments and transfers &gt;
      <br />
      Stop a payment &gt;
      <br />
      Change your statement preferences &gt;
    </div>
  </Col>
);

export default function RequestMoney() {
  return (
    <div>
      <Row as="h2">REQUEST MONEY</Row>
      <Row>
        <LeftCol />
        <RightCol />
      </Row>
    </div>
  );
}
