import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ZippyPageContainer from '../../../common/ZippyPageContainer';
import { TransactionInterface } from '../TransactionInterface';
import { TransactionTypeEnum } from '../TransactionTypeEnum';
import { TunnelTypeEnum } from '../TunnelTypeEnum';
import { Contact } from '../../../api';
import { formatContactName } from '../../../Helpers';

export default function TransactionStart({
  contactList,
  // accountsList,
  transactionType,
  handleTriggerTransaction,
  isProcessing,
  // errorMessage,
  mainInfo,
  setMainInfo,
  // selectedAccount,
  // setSelectedAccount,
  selectedContact,
  setSelectedContact,
  tunnelType,
  setTunnelType,
}: TransactionInterface) {
  const navigate = useNavigate();

  return (
    <>
      <ZippyPageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
        <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
          <Button
            className={transactionType === TransactionTypeEnum.SEND ? 'active' : ''}
            onClick={() => navigate(`/my-wallet/zippy-money/${TransactionTypeEnum.SEND}/transaction-start`)}
            disabled={transactionType === TransactionTypeEnum.SEND}
          >
            Send Money
          </Button>
          <Button
            className={transactionType === TransactionTypeEnum.REQUEST ? 'active' : ''}
            onClick={() => navigate(`/my-wallet/zippy-money/${TransactionTypeEnum.REQUEST}/transaction-start`)}
            disabled={transactionType === TransactionTypeEnum.REQUEST}
          >
            Request Money
          </Button>
        </div>
        <div className="account-identifier">
          <Form.Select
            className="send-account-select"
            onChange={(event) => setSelectedContact(Number(event.target.value))}
            value={selectedContact}
          >
            <option>Select</option>
            {contactList?.map((item: Contact) => (
              <option key={item.id} value={item.id}>
                {formatContactName(item.firstName, item.lastName)}
              </option>
            ))}
          </Form.Select>
          {/*
          <FormControl
              placeholder="Enter @ZippyUsername or Email"
            />
            <i className="zippy-cash-icon zc-add" />
          */}
        </div>
        <FormControl
          className="amount"
          value={mainInfo.amount}
          type="number"
          step=".01"
          onChange={(evt) => setMainInfo({ ...mainInfo, amount: Number(evt.target.value) })}
        />
        <div className="select-method">
          <Form.Check
            id="zippy-cash"
            type="radio"
            className="actions"
            label="Zippy.Cash"
            name="actions2"
            onChange={() => setTunnelType(TunnelTypeEnum.ZIPPY_CASH)}
            checked={tunnelType === TunnelTypeEnum.ZIPPY_CASH}
          />
          <Form.Check
            id="interac-e-transfer"
            type="radio"
            className="actions"
            label="Interac® e-Transfer"
            name="actions2"
            onChange={() => setTunnelType(TunnelTypeEnum.INTERAC_E_TRANSFER)}
            checked={tunnelType === TunnelTypeEnum.INTERAC_E_TRANSFER}
          />
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            disabled={isProcessing}
            onClick={handleTriggerTransaction}
          >
            {isProcessing && <div className="loading spinner-border" role="status" />}
            Zipp It
          </Button>
        </div>
      </ZippyPageContainer>
    </>
  );
}
