import { useState } from 'react';
import {
  Col, Row, Form, Button,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import StepComponent from '../../../common/StepComponent';
import CommonHeader from '../../../common/CommonHeader';
import IdentityVerificationModal from './IdentityVerificationModal';
import { formatContactName } from '../../../Helpers';

const Divider = () => <div className="border-top my-3" />;
const HorizontalLine = () => (
  <hr
    style={{
      height: '2px',
      borderWidth: '0px',
      color: 'gray',
      background: 'gray',
      marginTop: 40,
    }}
  />
);

const LeftCol = ({ currentStep, setCurrentStep, setPageIndex }: any) => (
  <Col xs={9}>
    <Row>
      <Col>
        <StepComponent
          steps={2}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setPageIndex={setPageIndex}
        />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <h3>Contact Profile:</h3>
        <ul style={{ marginTop: 50 }}>
          <li>
            Change the contact profile by deleting or typing over the existing
            content then selecting Next
          </li>
          <li>
            Enter an email address or mobile phone number for your contact
          </li>
        </ul>
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
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

const EditContact: React.FC = () => {
  const { state } = useLocation();
  const selectedContact = state?.item;
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <IdentityVerificationModal
          show={show}
          handleClose={() => setShow(false)}
          selectedContact={selectedContact}
        />
        <Row>
          <Col>
            <CommonHeader title="EDIT CONTACT" print={false} />
          </Col>
        </Row>
        <Row>
          <LeftCol currentStep={1} setCurrentStep={() => {}} />
          <RightCol />
        </Row>
        <Row style={{ marginTop: 100 }}>
          <Col xs="4" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: 'fit-content' }}>
              Name:
            </span>
          </Col>
          <Col xs="4" style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Control
              type="text"
              value={formatContactName(selectedContact?.firstName, selectedContact?.lastName)}
              style={{
                display: 'inline-block',
                width: 250,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
          </Col>
          <Col xs="4" style={{ display: 'flex', alignItems: 'center' }}>
            {}
          </Col>
        </Row>
        <HorizontalLine />
        <Row style={{ marginTop: 30 }}>
          <Col>
            <span>Details</span>
          </Col>
          <Col>
            <div className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                P
              </div>
              <a href="/">Mobile phone</a>
            </div>
          </Col>
          <Col>{}</Col>
        </Row>
        <HorizontalLine />
        <Row style={{ marginTop: 30 }}>
          <Col xs="4">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              Email Address:
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              value={selectedContact?.email}
              style={{
                width: 250,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
          </Col>
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <a href="/">Delete</a>
          </Col>
        </Row>
        <HorizontalLine />
        <Row style={{ marginTop: 30 }}>
          <Col>
            <span>Notification Language:</span>
          </Col>
          <Col>
            <Form.Select
              style={{
                width: 250,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 50,
              }}
            >
              <option>English</option>
            </Form.Select>
          </Col>
          <Col>{}</Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col style={{ padding: 0, background: 'white' }}>
            <Button
              style={{ margin: 0, background: 'white', border: 'none' }}
              variant="light"
              className="d-flex"
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
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              className="btn btn-danger"
              onClick={() => setShow(true)}
              style={{ marginLeft: 15 }}
            >
              Next
            </Button>
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
          <div className="mt-4">
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
            <p>
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
        </Row>
      </div>
    </>
  );
};

export default EditContact;
