import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import Api, { Account, Contact } from '../../../api';

const Divider = () => <div className="border-top my-3" />;

export default function RequestDetail({ setCurrentStep }: any) {
  const [accountFrom, setAccountFrom] = useState<Contact | null >(null);
  const [contacts, setContacts] = useState<Contact[] | null>([]);
  const [accountsData, setAccountsData] = useState<Account[] | null>([]);
  const { instance, accounts } = useMsal();

  useEffect(() => {
    new Api(instance, accounts[0]).listContacts()
      .then((contactsList) => {
        setContacts(contactsList);
      })
      .catch((error) => console.log('error', error));
    new Api(instance, accounts[0]).listAccounts()
      .then((accountsList) => {
        setAccountsData(accountsList);
      })
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <>
      <Row>
        <Col>
          <h4 className="mt-4">Request Money Details</h4>
        </Col>
      </Row>
      <Row className="align-items-center mt-4">
        <Col xs={3}>Request Money From:</Col>
        <Col xs={6}>
          <Form.Select onChange={(evt) => {
            if (evt.target.value === '') {
              setAccountFrom(null);
              return;
            }
            setAccountFrom(JSON.parse(evt.target.value));
          }}
          >
            <option value="">Select</option>
            {
              contacts?.map((contact) => (
                <option key={contact.email} value={JSON.stringify(contact)}>{contact.name}</option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>
      <Divider />
      {accountFrom && (
        <>
          <Row className="align-items-center mt-4">
            <Col xs={3}>Notify By:</Col>
            <Col xs={9}>
              {accountFrom.email && accountFrom?.email !== '' ? (
                <Form.Check
                  type="checkbox"
                  id="email"
                  label={`Email ${accountFrom.email}`}
                  className="mt-2 mb-2"
                />
              )
                : (
                  <Form.Check
                    type="checkbox"
                    id="text"
                    label="Text Message"
                    className="mt-2 mb-2"
                  />
                )}
              <Button variant="link" className="text-black">Edit Notification Preferences</Button>
            </Col>
          </Row>
          <Divider />
        </>
      )}
      <Row className="align-items-center">
        <Col xs={3}>Request Amount:</Col>
        <Col xs={6}>
          <Form.Control type="number" placeholder="$" />
        </Col>
      </Row>
      <Row className="align-items-center mt-2">
        <Col xs={3} />
        <Col xs={9}>
          You can request up to $10,000
          <br />
          Financial institutions may have different limits for using
          {' '}
          <i>Interac</i>
          {' '}
          e-Transfer. Confirm with your contact that they can
          send you the amount you&apos;re requesting.
        </Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Deposit To:</Col>
        <Col xs={9}>
          <Form.Select>
            <option value="">Select</option>
            {
              accountsData?.map((accountData) => (
                <option key={accountData.name} value={JSON.stringify(accountData)}>
                  {accountData.name}
                </option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>
      <Row className="align-items-center mt-2">
        <Col xs={3} />
        <Col xs={9}>
          If your request is fulfilled, the money will be deposited
          automatically to your chosen account.
        </Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Invoice Due Date (Optional):</Col>
        <Col xs={9}>
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
        <Col xs={3}>Invoice Number (Optional):</Col>
        <Col xs={9}>
          <Form.Control type="number" />
        </Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Message Or Reason For Request (Optional):</Col>
        <Col xs={9}>
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
        <Col xs={3}>Your Email Nickname:</Col>
        <Col xs={6}>DUANE TOUGH</Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Your Email Address:</Col>
        <Col xs={6}>dtough@hotmail.com</Col>
      </Row>
      <Row className="align-items-center mt-4">
        <Col>
          <div
            className="px-4 py-2"
            style={{ backgroundColor: '#606366', color: '#fff' }}
          >
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
            Note: You may be charged a fee when your request for money is
            completed. Fee may not apply depending on account terms.
            {' '}
            <u>Review fee details</u>
            .
          </b>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col className="text-end">
          <Button variant="danger" onClick={() => setCurrentStep(2)}>
            Send Request
          </Button>
        </Col>
      </Row>
    </>
  );
}
