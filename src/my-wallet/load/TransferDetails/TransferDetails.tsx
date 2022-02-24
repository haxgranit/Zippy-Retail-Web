import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';
import { FundingSourceTransaction } from '../../../constants/type/FundingSourceTransaction';

type LocationState = {
  id: number,
  sourceId: number,
  isCredit: boolean
};

export default function TransferDetails() {
  const { instance, accounts } = useMsal();
  const [transferDetails, settransferDetails] = useState<FundingSourceTransaction | null>(null);
  const state = useLocation().state as LocationState;
  const [dateTime, setDateTime] = useState<{ date: string, time:string }>({ date: '', time: '' });
  const navigate = useNavigate();
  useEffect(() => {
    new Api(instance, accounts[0])
      .getFundingSourceTransaction(state.id, state.sourceId)
      .then((data: FundingSourceTransaction) => {
        settransferDetails(data);
        const today = new Date(data?.createdDate);
        const month = today.toLocaleString('default', { month: 'short' });
        setDateTime({
          date: `${month} ${today.getDate()}, ${today.getFullYear()}`,
          time: today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);
      });
  }, []);

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!">
      <div className="body">
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

            <span>{dateTime.date}</span>
          </div>

          <div className="detail-wrap">
            <span>Transfer Time (UTC)</span>

            <span>{dateTime.time}</span>
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
      </div>
      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => navigate(`/my-wallet/${state?.isCredit ? 'get' : 'load'}`)}
        >
          {state?.isCredit ? 'GET' : 'LOAD'}
        </Button>
      </div>
    </PageContainer>
  );
}
