import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';
import { TunnelTypeEnum } from '../../../constants/enum/TunnelTypeEnum';
import ContactInput from '../../../common/ContactInput/ContactInput';
import AmountInput from '../../../common/AmountInput';
import Alert from '../../../common/Alert';

export default function TransactionStart({
  transactionType,
  handleTriggerTransaction,
  contactList,
  setContactList,
  isProcessing,
  mainInfo,
  setMainInfo,
  selectedContact,
  setSelectedContact,
  tunnelType,
  setTunnelType,
  note,
  setNote,
  errorMessage,
  setErrorMessage,
}: TransactionInterface) {
  const navigate = useNavigate();

  const validate = () => transactionType && selectedContact.id && mainInfo.amount && tunnelType;

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="body">
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
          <ContactInput
            contactList={contactList}
            setContactList={setContactList}
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
          <AmountInput
            amount={mainInfo.amount}
            setAmount={(value) => setMainInfo({ ...mainInfo, amount: Number(value) })}
          />
          <FormControl
            className="transaction-note"
            placeholder="Add a Note"
            value={note}
            onChange={(evt) => setNote(evt.target.value)}
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
              disabled
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
        </div>
        {errorMessage && (
          <div>
            <Alert AlertMsg={errorMessage} onClose={() => { setErrorMessage(''); }} />
          </div>
        )}
        <div className="action">
          <Button
            className="zippy-btn"
            disabled={isProcessing || !validate()}
            onClick={handleTriggerTransaction}
          >
            {isProcessing && <div className="loading spinner-border" role="status" />}
            Zipp It
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
