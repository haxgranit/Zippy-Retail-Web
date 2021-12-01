import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Alert,
} from 'react-bootstrap';

const SecurityQuestionPage = ({
  setRealStep,
  setCurrentStep,
}: any): JSX.Element => (
  <>
    <h4>Security Question</h4>
    <ul className="mt-4 mb-4">
      <li>
        Enter a security question and response that only this contact can
        answer. They must answer the security question correctly to receive the
        Interac e-Transfer.
      </li>
      <li>
        The security question can be up to 40 characters including spaces.
      </li>
      <li>
        The security answer must be between 6 and 25 characters. It can contain
        letters and numbers, but not special characters such as &quot;%&quot;
        and &quot;/&quot;
      </li>
      <li>
        The answer to the security question may not be part of the security
        question or the optional message
      </li>
      <li>
        The security question can not contain the same words as the security
        answer
      </li>
      <li>
        You are responsible for notifying the contact of the security question
        and exact answer
      </li>
    </ul>
    <h4 className="mt-4">Details</h4>
    <Alert variant="info">
      <div className="d-flex align-items-center">
        <div
          style={{
            width: 40,
            height: 45,
            border: '1px dotted grey',
            textAlign: 'center',
          }}
        >
          P
        </div>
        <div>
          <p>
            The security question and answer must be unique. Never share your
            security answer through email, text or social media
          </p>
        </div>
      </div>
    </Alert>
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Create a security question:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Security Answer(no spaces):</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
        <Form.Check type="checkbox" label="Show Answer" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-2">
      <Col md={4}>
        <Form.Label>Re-enter Security Answer:</Form.Label>
      </Col>
      <Col md={8}>
        <FormControl type="text" />
      </Col>
    </Row>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
      <Col>
        <Button
          variant="light"
          className="d-flex"
          onClick={() => setRealStep(2)}
        >
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
          Cancel
        </Button>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
          onClick={() => setRealStep(2)}
        >
          Back
        </Button>
        <Button
          variant="danger"
          className="d-flex"
          onClick={() => {
            setRealStep(4);
            setCurrentStep(3);
          }}
        >
          Next
        </Button>
      </Col>
    </Row>
  </>
);

export default SecurityQuestionPage;
