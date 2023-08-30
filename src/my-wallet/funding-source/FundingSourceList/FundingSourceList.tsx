import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';
import { FundingSource } from '../../../constants/type/FundingSource';

export default function FundingSourceList() {
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();
  const [fundingSources, setFundingSources] = useState<FundingSource[]>([]);

  useEffect(() => {
    new Api(instance, accounts[0])
      .listFundingSources()
      .then((result:FundingSource[]) => {
        setFundingSources(result);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="backdrop-image-4">
      <div className="funding-title">
        Funding Source
      </div>

      <div style={{ height: 380 }}>
        <div className="bank-wrapper">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="zippy-cash-icon zc-bank" />
            {' '}
            <p className="bank-title">Registered Banks</p>
          </div>
          <div
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
            onClick={() => navigate('/my-wallet/funding-source/add-funding-source')}
            className="add-btn"
          >
            +Add
          </div>
        </div>

        { fundingSources.map((source:FundingSource) => (
          <div className="bank-details">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <input type="radio" />
              <div style={{ marginLeft: 11 }}>
                <p className="bank-name">{source.displayName}</p>
                <p className="acc-no">
                  Acc. Number:
                  {' '}
                  {source.bankAccount?.accountNumber}
                </p>
              </div>
            </div>
            <div className="edit-wrap">
              <i className="zippy-cash-icon zc-cross" />
              <div
                className="edit-btn"
                onKeyDown={() => { }}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/my-wallet/funding-source/edit-funding-source/${source.id}`)}
              >
                Edit

              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => navigate('/my-wallet/zippy-money/send/transaction-start')}
        >
          Send money
        </Button>
      </div>
    </PageContainer>
  );
}
