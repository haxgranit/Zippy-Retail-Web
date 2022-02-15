import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api, { FundingSource, FundingSourceTransactionResponce } from '../../../api';
import AmountInput from '../../../common/AmountInput';
import PageContainer from '../../../common/PageContainer';
import Alert from '../../../common/Alert';
import SourceOptions from '../options/SourceOptions';

export default function LoadInitiate() {
  const [fundingSources, setFundingSources] = useState<FundingSource[]>([]);
  const [amount, setAmount] = useState(0.00);
  const [cardExpired, setCardExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<FundingSource | undefined>(undefined);
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();

  useEffect(() => {
    new Api(instance, accounts[0])
      .listFundingSources()
      .then((result:FundingSource[]) => {
        setFundingSources(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const [loadTried, setLoadTried] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [sourceError, setSourceError] = useState(false);
  function loadFunds() {
    setLoadTried(true);
    setAmountError(!(amount > 0));
    setSourceError(!selectedAccount);
    if (!selectedAccount) {
      return;
    }
    if (!(amount > 0)) {
      return;
    }
    const fundRequest = {
      amount,
    };
    setIsLoading(true);
    new Api(instance, accounts[0])
      .postFundingSourceTransaction(fundRequest, selectedAccount.id)
      .then((resp:FundingSourceTransactionResponce) => {
        setIsLoading(false);
        navigate('/my-wallet/load/status', {
          state: {
            ...fundRequest, status: resp.status, id: resp.id, sourceId: selectedAccount.id,
          },
        });
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
        navigate('/my-wallet/load/status', {
          state: { ...fundRequest, status: 'failed', sourceId: selectedAccount.id },
        });
      });
  }

  return (
    <PageContainer title="Personal Account" subTitle="Made Fun With Zippy!" backdropImage="backdrop-image-2">
      <AmountInput
        amount={amount}
        setAmount={(value) => setAmount(Number(value))}
      />
      {loadTried && amountError
        && (
          <Alert AlertMsg="Amount must be greater than zero" onClose={() => { setAmountError(false); }} />
        )}
      <SourceOptions
        defaultTitle="Select funding source"
        fundingSources={fundingSources}
        onChange={(option: FundingSource) => {
          setSelectedAccount(option);
        }}
        onEmptyOptionsSelected={() => {
          // navigate to add new account
        }}
      />
      {loadTried && sourceError
        && (
          <Alert AlertMsg="Please select funding source" onClose={() => { setSourceError(false); }} />
        )}
      <div className="action">
        <Button
          disabled={isLoading}
          className="zippy-btn"
          onClick={() => {
            loadFunds();
          }}
        >
          {isLoading && <div className="loading spinner-border" role="status" />}
          Load
        </Button>
      </div>
      <Modal show={cardExpired} onHide={() => setCardExpired(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>This Card is expired!</Modal.Body>
        <Modal.Footer>
          <Button
            className="zippy-btn"
            variant="secondary"
            onClick={() => setCardExpired(false)}
          >
            Remove Card
          </Button>
        </Modal.Footer>
      </Modal>
    </PageContainer>
  );
}
