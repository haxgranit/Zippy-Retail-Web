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
  const [transferDetails, settransferDetails] = useState<any>(null);
  const state = useLocation().state as LocationState;
  useEffect(() => {
    new Api(instance, accounts[0])
      .getFundingSourceTransaction(state.id, state.sourceId)
      .then((data) => {
        settransferDetails(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const today = new Date('2022-02-14T16:18:51.3175848');

  const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  // new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short"})

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!">
      {transferDetails?.status === 'pending' ? (
        <div className="title pending">
          Transfer Pending
        </div>
      ) : (
        <div className="title complete">
          Transfer Completed
        </div>
      )}

      <div className="transaction-detail">
        <div className="detail-wrap">
          <span>Transfer Type</span>

          <p>Zippy Wallet Load</p>
        </div>
        <div className="detail-wrap">
          <span>Transfer Date</span>

          <span>{date}</span>
        </div>

        <div className="detail-wrap">
          <span>Transfer Time (UTC)</span>

          <span>{transferDetails?.createdDate.split('T')[1].split('.')[0]}</span>
        </div>

        <div className="detail-wrap">
          <span>Transfer Amount</span>

          <p style={{ color: '#0D6EFD' }}>{ `$${transferDetails?.amount ?? ''}`}</p>
        </div>

        <div className="detail-wrap">
          <span>Reference Number (Keep For Your Records)</span>

          <p>{transferDetails?.id}</p>
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
