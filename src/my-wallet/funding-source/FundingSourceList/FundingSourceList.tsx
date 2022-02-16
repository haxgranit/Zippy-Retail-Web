import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api, { FundingSource } from '../../../api';
import PageContainer from '../../../common/PageContainer';

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
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="background-funding-image">
      <div className="fundingTitle">
        Funding Source
      </div>

      <div>
        <div className="bankWrapper">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="zippy-cash-icon zc-bank" />
            {' '}
            <p className="bankTitle">Registered Banks</p>
          </div>
          <div
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
            onClick={() => navigate('/my-wallet/funding-source/add-funding-source')}
            className="addBtn"
          >
            +Add
          </div>
        </div>

        { fundingSources.map((source:FundingSource) => (
          <div className="bankDetails">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <input type="radio" />
              <div style={{ marginLeft: 11 }}>
                <p className="bankName">{source.displayName}</p>
                <p className="accNo">
                  Acc. Number:
                  {' '}
                  {source.bankAccount?.accountNumber}
                </p>
              </div>
            </div>
            <div className="editWrap">
              <i className="zippy-cash-icon zc-cross" />
              <div
                className="editBtn"
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
        >
          Send money
        </Button>
      </div>
    </PageContainer>
  );
}
