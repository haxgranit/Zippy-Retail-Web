/* eslint-disable react/destructuring-assignment */
import {
  Col,
  Row,
  Card,
  Table,
  Button,
  Modal,
} from 'react-bootstrap';
import { useState } from 'react';
import CONTACTS from './Contacts';
import CommonHeader from '../../common/CommonHeader';

function RemoveContactModal(props:any) {
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 style={{ marginTop: 20 }}>Delete Contact - Verification</h4>
        <p>
          Are you sure you want to remove the contact below from your contact list?
        </p>
        <Row style={{ marginTop: 50, marginBottom: 20 }}>
          <Col>
            <span>Name:</span>
          </Col>
          <Col>
            {props.selectedContact?.name}
          </Col>
        </Row>
        <hr style={{
          height: '2px',
          borderWidth: '0px',
          color: 'gray',
          background: 'gray',
        }}
        />
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col>
            <span>Email Address:</span>
          </Col>
          <Col>
            {props.selectedContact?.email}
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col style={{ padding: 0, background: 'white' }}>
            <Button onClick={props.onHide} style={{ margin: 0, background: 'white', border: 'none' }} variant="light" className="d-flex">
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
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
            <Button className="btn btn-danger" style={{ marginLeft: 15 }} onClick={props.onDeleteConfirm}>Delete</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default function ContactList() {
  const [modalShow, setModalShow] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);
  const [selectedContact, setSelectedContact] = useState<{ email:string }>();
  const onDeletePressed = (contact:any) => () => {
    setModalShow(true);
    setSelectedContact(contact);
  };
  const onDeleteConfirm = () => {
    setContacts(
      (prevContacts) => prevContacts.filter(({ email }) => email !== selectedContact?.email),
    );
    setModalShow(false);
  };

  return (
    <>
      <CommonHeader title="CONTACT LIST" print />
      <Row>
        <Col md={9}>
          <h4 className="mt-4">Add, Edit or Delete a Contact</h4>
          <ul className="mt-4">
            <li>
              To edit a contact&apos;s details, select the contact&apos;s name
            </li>
            <li>
              <a href="/" className="text-black">
                Edit your Interac e-Transfer alert preferences
              </a>
            </li>
            <li>
              <a href="/" className="text-black">
                Add New Contact
              </a>
            </li>
            <li>
              Note: Contacts names can not be identical. Please verify and edit
              (if necessary)
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <Card className="p-3 bg-white mt-2">
            <Card.Title>You can also:</Card.Title>
            <Card.Body>
              <a
                href="/"
                className="text-decoration-none text-black"
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  marginBottom: 5,
                  display: 'block',
                }}
              >
                Register for Interac e-Transfer Autodeposit
                <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                  {'>'}
                </span>
              </a>
              <a
                href="/"
                className="text-decoration-none text-black"
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  marginBottom: 5,
                  display: 'block',
                }}
              >
                Make an additional loan payment
                <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                  {'>'}
                </span>
              </a>
              <a
                href="/"
                className="text-decoration-none text-black"
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  marginBottom: 5,
                  display: 'block',
                }}
              >
                Order cheques
                <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                  {'>'}
                </span>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Table className="mt-4">
            <thead>
              <tr
                className="bg-light"
                style={{ borderTop: '1px solid #c5c5c5' }}
              >
                <th>Contact Name</th>
                <th>Notification Language</th>
                <th>Details</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: 'none' }}>
              {contacts.map((item) => (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>{item.lang}</td>
                  <td>
                    {item.email && (
                      <div>{item.email}</div>
                    )}
                    {item.phone && (
                      <div>{item.phone}</div>
                    )}
                  </td>
                  <td>
                    <Button onClick={onDeletePressed(item)} variant="light" className="text-black d-flex">
                      <div
                        style={{
                          width: 20,
                          height: 25,
                          border: '1px dotted grey',
                          textAlign: 'center',
                          marginRight: 10,
                        }}
                        title="print"
                      >
                        P
                      </div>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              <RemoveContactModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedContact={selectedContact}
                onDeleteConfirm={onDeleteConfirm}
              />
            </tbody>
          </Table>
          <div
            className="mt-4 p-3"
            style={{
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            <Row className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="d-flex"
                style={{ width: 'auto' }}
              >
                Add New Contact
              </Button>
            </Row>
          </div>
          <div className="mt-2">
            <div className="d-flex">
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
              <span style={{ fontWeight: 'bold' }}>Note:</span>
            </div>
            <p className="d-flex align-items-end">
              <span>Your use of Interac e-Transfer is subject to the </span>
              <Row>
                <Col md={12} className="d-flex align-items-center mt-2">
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
                  <span>
                    Interac e-Transfer Terms and Conditions (PDF, 197KB).
                  </span>
                </Col>
              </Row>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
