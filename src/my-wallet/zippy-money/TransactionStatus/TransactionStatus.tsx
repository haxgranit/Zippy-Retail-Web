import {
  Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ZippyPageContainer from '../../../common/ZippyPageContainer';
import { TransactionInterface } from '../TransactionInterface';

export default function TransactionStatus({
  transaction,
  transactionType,
  resetMainInfo,
}: Pick<TransactionInterface, 'transaction' | 'transactionType' | 'resetMainInfo'>) {
  const navigate = useNavigate();

  return (
    <>
      <ZippyPageContainer title="Personal Banking" subTitle="Made Fun With Zippy!" className="transaction-status">
        <div className="title">
          Transaction Status
        </div>
        <div className="status">
          <div><i className="zippy-cash-icon zc-verified" /></div>
          <div>
            Your $100 transfer has been sent to Duane Tough.
          </div>
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={resetMainInfo}
          >
            Send Another Transfer
          </Button>
          <Button
            className="zippy-btn btn-neutral"
            onClick={() => navigate(`/my-wallet/zippy-money/${transactionType}/transaction-details/${transaction?.id}`)}
          >
            View Transfer Details
          </Button>
        </div>
      </ZippyPageContainer>
    </>
  );
}
