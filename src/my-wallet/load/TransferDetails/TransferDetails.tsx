import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';

type LocationState = {
  id: number,
  sourceId: number
};

export default function TransferDetails() {
  const { instance, accounts } = useMsal();
  const [transferDeatils, setTransferDeatils] = useState<any>(null);
  const state = useLocation().state as LocationState;
  useEffect(() => {
    new Api(instance, accounts[0])
      .getFundingSourceTransaction(state.id, state.sourceId)
      .then((data) => {
        setTransferDeatils(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!">
      <div className="title complete">
        Transfer Completed
      </div>

      <div className="transaction-detail">
        <div className="detail-wrap">
          <span>Transfer Type</span>

          <p>Zippy Wallet Load</p>
        </div>

        <div className="detail-wrap">
          <span>Transfer Date</span>

          <span>Nov 2, 2021</span>
        </div>

        <div className="detail-wrap">
          <span>Transfer Time (UTC)</span>

          <span>10:10 AM</span>
        </div>

        <div className="detail-wrap">
          <span>Transfer Amount</span>

          <p style={{ color: '#0D6EFD' }}>{ `$${transferDeatils?.amount ?? ''}`}</p>
        </div>

        <div className="detail-wrap">
          <span>Reference Number (Keep For Your Records)</span>

          <p>{transferDeatils?.DCBankEftTransaction?.transactionId}</p>
        </div>
      </div>

      <div className="action">
        <Button
          className="zippy-btn"
        >
          Load
        </Button>
      </div>
    </PageContainer>
  );
}
