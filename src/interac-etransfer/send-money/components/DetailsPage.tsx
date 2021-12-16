import { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Account, Contact } from '../../../api';

const DetailsPage = ({
  setRealStep,
  setCurrentStep,
  selectedUser = 1,
  setUserToSend,
  mainInfo,
  setMainInfo,
  accounts,
  contacts,
}: any): JSX.Element => {
  const [contactName, setContactName] = useState('');
  const handleAccountChange = (evt: any) => {
    setUserToSend(Number(evt.target.value));
    setContactName(evt.target.value);
  };
  const getEmail = (name: string) => contacts?.find((el: Contact) => el.name === name)?.email || 'No email';

  return (
    <>
      <h4>Your Interac e-Transfer Details</h4>
      <ul>
        <li>
          Fees apply to Interac e-Transfer transactions.
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer fees
          </a>
        </li>
        <li>
          There are limits on how much money you can send in a day, a week and a
          month.
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer limits
          </a>
        </li>
        <li>
          Note: Sending money outside of Canada? Use the
          <a href="/" className="text-black">
            {' '}
            ZippyX Global Money Transfer Servicec
          </a>
        </li>
      </ul>
      <Row className="mt-4">
        <Col md={4}>
          <Form.Label>Send Money To:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="send-account-select"
            onChange={handleAccountChange}
          >
            {contacts?.map((item: Contact, index: number) => (
              <option key={item.name} value={index}>{item.name}</option>
            ))}
          </Form.Select>
          <p>
            { `Email: ${getEmail(contactName)}` }
            {' '}
            {getEmail(contactName)}
          </p>
          <p>
            <a href="/" className="text-black">
              Edit Contact
            </a>
          </p>
          <p>
            <a href="/" className="text-black">
              New Contact
            </a>
          </p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Amount:</Form.Label>
        </Col>
        <Col md={8}>
          <FormControl
            type="email"
            value={mainInfo?.email}
            onChange={(evt) => setMainInfo({ ...mainInfo, email: evt.target.value })}
          />
          <Form.Label>
            The maximum amount you can send in each transfer is $3,000.
          </Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>From Account:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="from-account-info"
            onChange={(evt) => setMainInfo({ ...mainInfo, from: evt.target.value })}
            value={mainInfo?.from}
          >
            <option value="">Select</option>
            {
              accounts?.map((contact:Account) => (
                <option key={contact.name} value={contact.name}>{`${contact.name} $Balance`}</option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Transfer Method:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="transfer-method"
            onChange={(evt) => setMainInfo({ ...mainInfo, transfer_method: evt.target.value })}
            value={mainInfo?.transfer_method}
          >
            <option>Email</option>
          </Form.Select>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Message (Optional):</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(evt) => setMainInfo({ ...mainInfo, message: evt.target.value })}
            value={mainInfo?.message}
          />
          <p>
            Do not provide the security question, any part of the security
            answer or any confidential information in your message to the
            contact. This message will be viewable on the Interac e-Transfer
            Status page.
          </p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={12}>
          <p>
            This is how you will appear in all emails to your Interac e-Transfer
            contacts. If incorrect,
            <a href="/" className="text-black">
              edit your profile.
            </a>
          </p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Your Email Nickname:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>DUANE TOUGH</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Your Email Address:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>dtough@hotmail.com</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-4 mb-4">
        <Col>
          <Button variant="light" className="d-flex">
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
            variant="danger"
            className="d-flex"
            onClick={() => {
              if (selectedUser === 1) {
                setCurrentStep(2);
                setRealStep(2);
              } else {
                setCurrentStep(2);
                setRealStep(3);
              }
            }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DetailsPage;
