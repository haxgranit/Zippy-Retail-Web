import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';
import { TunnelTypeEnum } from '../../../constants/enum/TunnelTypeEnum';
import ContactSelector from '../../../common/ContactSelector';

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
      <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
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
        <ContactSelector
          contactList={contactList}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
        <FormControl
          className="amount"
          placeholder="0.00"
          value={mainInfo.amount || ''}
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
      </PageContainer>
    </>
  );
}
