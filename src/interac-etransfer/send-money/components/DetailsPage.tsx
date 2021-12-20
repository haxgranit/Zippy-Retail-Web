import { Dispatch, SetStateAction, useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Account, Contact } from '../../../api';
import { TransferMainDetails } from '../SendMoney';

interface DetailsPageProps {
  setRealStep: Dispatch<SetStateAction<number>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  selectedContact : number;
  setContactToSend: Dispatch<SetStateAction<number>>;
  mainInfo: TransferMainDetails;
  setMainInfo: Dispatch<SetStateAction<TransferMainDetails>>;
  accounts: Account[] | null;
  contacts: Contact[] | null;
}
const DetailsPage = ({
  setRealStep,
  setCurrentStep,
  selectedContact = 0,
  setContactToSend,
  mainInfo,
  setMainInfo,
  accounts,
  contacts,
}: DetailsPageProps): JSX.Element => {
  const [contactId, setContactId] = useState(0);
  const handleAccountChange = (evt: any) => {
    setContactToSend(Number(evt.target.value));
    setContactId(evt.target.value);
  };
  const getEmail = (id: number) => contacts?.find((el: Contact) => el.id === id)?.email || 'No email';

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
            <option value={0}>Select</option>
            {contacts?.map((item: Contact) => (
              <option key={item.id} value={item.id}>{`${item.firstName} ${item.lastName}`}</option>
            ))}
          </Form.Select>
          <p>
            { `Email: ${getEmail(contactId)}` }
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
            value={mainInfo?.amount}
            type="number"
            onChange={(evt) => setMainInfo({ ...mainInfo, amount: Number(evt.target.value) })}
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
            onChange={(evt) => setMainInfo({ ...mainInfo, fromAccount: evt.target.value })}
            value={mainInfo?.fromAccount}
          >
            <option value="">Select</option>
            {
              accounts?.map((account:Account) => (
                <option key={account.name} value={account.name}>{`${account.name} $Balance`}</option>
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
            onChange={(evt) => setMainInfo({ ...mainInfo, transferMethod: evt.target.value })}
            value={mainInfo?.transferMethod}
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
            disabled={(mainInfo?.fromAccount == null || mainInfo?.fromAccount === '' || selectedContact === 0)}
            onClick={() => {
              if (selectedContact === 1) {
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
