import PropTypes from 'prop-types';
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../../../api';
import AmountInput from '../../../common/AmountInput';
import PageContainer from '../../../common/PageContainer';
import Alert from '../../../common/Alert';
import SourceOptions from '../options/SourceOptions';
import { FundingSource } from '../../../constants/type/FundingSource';
import { FundingSourceTransactionResponse } from '../../../constants/type/FundingSourceTransactionResponse';

export default function LoadInitiate({ mode } : { mode: 'load' | 'get' }) {
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
      // eslint-disable-next-line no-console
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
      isCredit: mode === 'get',
    };
    const statusUrl = `/my-wallet/${mode}/status`;
    setIsLoading(true);
    new Api(instance, accounts[0])
      .postFundingSourceTransaction(fundRequest, selectedAccount.id)
      .then((resp: FundingSourceTransactionResponse) => {
        setIsLoading(false);
        navigate(statusUrl, {
          state: {
            ...fundRequest, status: resp.status, id: resp.id, sourceId: selectedAccount.id,
          },
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);
        setIsLoading(false);
        navigate(statusUrl, {
          state: { ...fundRequest, status: 'failed', sourceId: selectedAccount.id },
        });
      });
  }

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="backdrop-image-2">
      <div className="body">
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
      </div>
      <div className="action">
        <Button
          disabled={isLoading}
          className="zippy-btn"
          onClick={() => {
            loadFunds();
          }}
        >
          {isLoading && <div className="loading spinner-border" role="status" />}
          {mode === 'load' ? 'LOAD' : 'GET'}
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

LoadInitiate.propTypes = {
  mode: PropTypes.string,
};

LoadInitiate.defaultProps = {
  mode: 'load',
};
