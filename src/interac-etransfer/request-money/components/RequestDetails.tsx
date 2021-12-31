/* eslint-disable no-console */

import
{
  Dispatch,
  SetStateAction,
} from 'react';
import
{
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Account, Contact } from '../../../api';
import DateDropdowns from '../../../components/DateDropdowns';
import { formatContactName } from '../../../Helpers';
import { RequestMainDetails } from '../RequestMoney';

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
  }
`;
const Divider = () => <div className="border-top my-3" />;

interface RequestDetailProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setContactToSend: Dispatch<SetStateAction<number>>;
  setMainInfo: Dispatch<SetStateAction<RequestMainDetails>>;
  setPageIndex: Dispatch<SetStateAction<number>>;
  setSelectedAccount: Dispatch<SetStateAction<number>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  selectedAccount: number;
  selectedContact : number;
  mainInfo: RequestMainDetails;
  accounts: Account[] | null;
  contacts: Contact[] | null;
  showModal: any,
}

export const RequestDetails = ({
  setPageIndex,
  setCurrentStep,
  selectedContact = 0,
  setContactToSend,
  mainInfo,
  setMainInfo,
  accounts,
  contacts,
  selectedAccount,
  setSelectedAccount,
  setErrorMessage,
  showModal,
}: RequestDetailProps): JSX.Element => {
  const handleContactChange = (evt: any) => {
    setContactToSend(Number(evt.target.value));
  };

  const handleAccountChange = (evt: any) => {
    setSelectedAccount(Number(evt.target.value));
  };

  const getEmail = (id: number) => {
    const contact = id ? contacts?.find((el: Contact) => el.id === id) : 'No email';
    return (contact as Contact)?.email || 'No email';
  };

  const getPhone = (id: number) => {
    const contact = id ? contacts?.find((el: Contact) => el.id === id) : 'No phone';
    return (contact as Contact)?.phone || 'No phone';
  };

  const validateInputs = (): string | null => {
    if (selectedContact === 0) return 'Please select a contact to request the money from';
    if (selectedAccount === 0) return 'Please select an account';
    if (mainInfo.amount <= 0) return 'Amount should be greater than 0';
    if (mainInfo.amount > 3000) return 'The maximum amount you can send in each transfer is $3,000';
    if (!mainInfo.agreed) return 'Please confirm that you have existing relationship with this contact';
    return null;
  };

  const handleNext = () => {
    setErrorMessage(null);
    const validationMessage = validateInputs();
    if (validationMessage !== null) {
      setErrorMessage(validationMessage);
      return;
    }
    setCurrentStep(2);
    setPageIndex(2);
    showModal(true);
  };

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
          <Form.Select
            onChange={handleContactChange}
            value={selectedContact}
          >
            <option value="">Select</option>
            {contacts?.map((item: Contact) => (
              <option key={item.id} value={item.id}>
                {formatContactName(item.firstName, item.lastName)}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Divider />
      {!!selectedContact && (
        <>
          <Row className="align-items-center mt-4">
            <Col xs={3}>Notify By:</Col>
            <Col xs={9}>
              {getEmail(selectedContact) && (
                <Form.Check
                  type="checkbox"
                  id="email"
                  label={`Email to ${getEmail(selectedContact)}`}
                  className="mt-2 mb-2"
                  checked={mainInfo.notifyByEmail}
                  onChange={(evt) => {
                    setMainInfo({ ...mainInfo, notifyByEmail: evt.target.checked });
                  }}
                />
              )}
              {getPhone(selectedContact) && (
                <Form.Check
                  type="checkbox"
                  id="text"
                  label={`Text message to ${getPhone(selectedContact)}`}
                  className="mt-2 mb-2"
                  checked={mainInfo.notifyTextMessage}
                  onChange={(evt) => {
                    setMainInfo({ ...mainInfo, notifyTextMessage: evt.target.checked });
                  }}
                />
              )}
              <Button variant="link" className="text-black">
                Edit Notification Preferences
              </Button>
            </Col>
          </Row>
          <Divider />
        </>
      )}
      <Row className="align-items-center">
        <Col xs={3}>Request Amount:</Col>
        <Col xs={6}>
          <Form.Control
            type="number"
            step=".01"
            placeholder="$"
            value={mainInfo.amount}
            onChange={(evt) => setMainInfo({ ...mainInfo, amount: Number(evt.target.value) })}
          />
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
          <Form.Select
            onChange={handleAccountChange}
            value={selectedAccount}
          >
            <option>Select</option>
            {
              accounts?.map((account:Account) => (
                <option key={account.name} value={account.id}>{account.name}</option>
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
        <DateDropdowns />
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Invoice Number (Optional):</Col>
        <Col xs={9}>
          <Form.Control
            type="number"
            onChange={(evt) => setMainInfo({
              ...mainInfo,
              invoiceNumber: Number(evt.target.value),
            })}
          />
        </Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={3}>Message Or Reason For Request (Optional):</Col>
        <Col xs={9}>
          <Form.Control
            as="textarea"
            onChange={(evt) => setMainInfo({
              ...mainInfo,
              message: evt.target.value,
            })}
          />
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
          <StyledLink to="/interac-etransfer/edit-my-profile">edit your profile</StyledLink>
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
              checked={mainInfo.agreed}
              onChange={(evt) => setMainInfo({
                ...mainInfo,
                agreed: evt.target.checked,
              })}
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
          <Button
            variant="danger"
            onClick={handleNext}
          >
            Send Request
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RequestDetails;
