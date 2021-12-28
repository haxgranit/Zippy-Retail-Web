import { Dispatch, SetStateAction } from 'react';
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Account, Contact } from '../../../api';
import { TransferMainDetails, PageIndexes } from '../SendMoney';
import { formatContactName } from '../../../Helpers';

interface DetailsPageProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  selectedContact : number;
  setContactToSend: Dispatch<SetStateAction<number>>;
  mainInfo: TransferMainDetails;
  setMainInfo: Dispatch<SetStateAction<TransferMainDetails>>;
  setPageIndex: Dispatch<SetStateAction<PageIndexes>>;
  accounts: Account[] | null;
  contacts: Contact[] | null;
  selectedAccount: number;
  setSelectedAccount: Dispatch<SetStateAction<number>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
}
const DetailsPage = ({
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
}: DetailsPageProps): JSX.Element => {
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

  const validateInputs = (): string | null => {
    if (selectedContact === 0) return 'Please select a contact to send money to';
    if (selectedAccount === 0) return 'Please select an account';
    if (mainInfo.amount <= 0) return 'Amount should be greater than 0';
    if (mainInfo.amount > 3000) return 'The maximum amount you can send in each transfer is $3,000';
    if (!mainInfo.transferMethod) return 'Please select a transfer method';
    return null;
  };

  const handleNext = () => {
    setErrorMessage(null);
    const validationMessage = validateInputs();
    if (validationMessage != null) {
      setErrorMessage(validationMessage);
      return;
    }
    if (selectedContact === 1) {
      setCurrentStep(2);
      setPageIndex(PageIndexes.SecurityRecipientPageIndex);
    } else {
      setCurrentStep(2);
      setPageIndex(PageIndexes.SecurityQuestionPageIndex);
    }
  };
  return (
    <>
      <h4>Your Interac e-Transfer Details</h4>
      <ul>
        <li>
          Fees apply to Interac e-Transfer transactions.
          {' '}
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer fees
          </a>
        </li>
        <li>
          There are limits on how much money you can send in a day, a week and a
          month.
          {' '}
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer limits
          </a>
        </li>
        <li>
          Note: Sending money outside of Canada? Use the
          {' '}
          <a href="/" className="text-black">
            ZippyX Global Money Transfer Services
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
            onChange={handleContactChange}
            value={selectedContact}
          >
            <option>Select</option>
            {contacts?.map((item: Contact) => (
              <option key={item.id} value={item.id}>
                {formatContactName(item.firstName, item.lastName)}
              </option>
            ))}
          </Form.Select>
          <p>
            { `Email: ${getEmail(selectedContact)}` }
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
            step=".01"
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
            onChange={(evt) => handleAccountChange(evt)}
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
            {' '}
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
            onClick={handleNext}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DetailsPage;
