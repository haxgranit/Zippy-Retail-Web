import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Account, Contact } from '../../../api';

const Divider = () => <div className="border-top my-3" />;

export default function RequestSent({
  accounts,
  contacts,
  selectedAccount,
  selectedContact,
  mainInfo,
  setCurrentStep,
  navigateStep,
}: any) {
  const navigate = useNavigate();
  const getSelectedAccount = (id: number):Account => {
    const value = id && accounts ? accounts?.find((el: Account) => el.id === id) : null;
    return value;
  };
  const getSelectedContact = (id: number):Contact => {
    const value = id && contacts ? contacts?.find((el: Contact) => el.id === id) : null;
    return value;
  };
  const [account] = useState<Account | null>(getSelectedAccount(selectedAccount));
  const [contact] = useState<Contact | null>(getSelectedContact(selectedContact));

  return (
    <>
      <div className="d-flex align-items-center mt-4">
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
        <h4>Your request has been sent</h4>
      </div>
      <Row className="mt-4">
        <Col md={4}>
          <p>Sent To:</p>
        </Col>
        <Col md={8}>
          <p>{ contact && `${contact.firstName} ${contact.lastName}` }</p>
          <p>kentu@shaw.ca</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Request Amount:</p>
        </Col>
        <Col md={8}>
          <p>{ mainInfo && `$ ${mainInfo.amount}` }</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Deposit To:</p>
        </Col>
        <Col md={8}>
          <p>{ account && account.name }</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>This Request Will Expire On:</p>
        </Col>
        <Col md={8}>
          <p>Jan 2, 2022</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Reference Number:</p>
        </Col>
        <Col md={8}>
          <p>cbec8cf23v3we3</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            className="d-flex"
            style={{ marginRight: 10 }}
            onClick={() => {
              navigate('/interac-etransfer/status/requested');
            }}
          >
            Check Status
          </Button>
          <Button
            variant="danger"
            className="d-flex"
            onClick={() => {
              setCurrentStep(1);
              navigateStep(0);
            }}
          >
            Send another transfer
          </Button>
        </Col>
      </Row>
    </>
  );
}
