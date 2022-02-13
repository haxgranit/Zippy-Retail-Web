import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api, { FundingSource } from '../../../api';
import AmountInput from '../../../common/AmountInput';
import PageContainer from '../../../common/PageContainer';
import Options from '../options/options';

export default function LoadInitiate() {
  const [fundingSources, setFundingSources] = useState<FundingSource[]>([]);
  const [amount, setAmoumt] = useState(0.00);
  const [cardExpired, setCardExpired] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<FundingSource | undefined>(undefined);
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();

  useEffect(() => {
    new Api(instance, accounts[0])
      .listFundingSources()
      // .then((result:FundingSource[]) => {
      .then((result:any) => {
        setFundingSources(result ?? []);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const [loadTried, setLoadTried] = useState(false);
  function loadFunds() {
    setLoadTried(true);

    if (!selectedAccount) {
      return;
    }
    if (!(amount > 0)) {
      return;
    }

    if (selectedAccount?.paymentCard) {
      setCardExpired(true);
      return;
    }
    const fundRequest = {
      amount,
      sourceId: selectedAccount.id,
    };
    new Api(instance, accounts[0])
      .postFundLoadRequest(fundRequest)
      .then(() => {
        navigate('/my-wallet/load/status', {
          state: { ...fundRequest, status: fundRequest.amount > 500 ? 'Success' : 'In_Progress' },
        });
      })
      .catch((error) => {
        console.log('error', error);
        navigate('/my-wallet/load/status', {
          state: { ...fundRequest, status: 'Failure' },
        });
      });
  }

  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
      <div className="title">
        Load wallet
      </div>

      <AmountInput
        amount={amount}
        setAmount={(value) => setAmoumt(Number(value))}
      />
      {loadTried && !(amount > 0)
        && (
          <span style={{ color: 'red' }}>
            {' '}
            *Amount Must Be Greater Than Zero
          </span>
        )}
      <Options
        defaultTitle="Select funding source"
        fundingSources={fundingSources}
        onChange={(option: FundingSource) => {
          setSelectedAccount(option);
        }}
      />
      {loadTried && !selectedAccount
        && (
          <span style={{ color: 'red' }}>
            {' '}
            *Please Select funding source
          </span>
        )}
      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => {
            loadFunds();
          }}
        >
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
