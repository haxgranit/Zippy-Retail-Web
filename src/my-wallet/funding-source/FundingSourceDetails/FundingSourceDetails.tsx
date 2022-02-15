import { useMsal } from '@azure/msal-react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';

export default function FundingSourceDetails() {
  const { id } = useParams();
  const [bankName, setBankName] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [institutionNumber, setInstitutionNumber] = useState<string>('');
  const [transitNumber, setTransitNumber] = useState<string>('');
  const [isDefault, setIsDefault] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { instance, accounts } = useMsal();

  const navigate = useNavigate();

  function saveAccount() {
    setIsLoading(true);
    new Api(instance, accounts[0])
      .postFundingSource({
        displayName: bankName,
        isDefault,
        bankAccount: {
          accountNumber,
          institutionNumber: +institutionNumber,
          transitNumber: +transitNumber,
        },
      })
      .then(() => {
        setIsLoading(false);
        navigate('/my-wallet/funding-source');
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
      });
  }
  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="background-funding-image">
      <div className="fundingTitle">
        Funding Source
        {' '}
        {id}
      </div>

      <div className="bankForm">
        <form action="">
          <input value={bankName} type="text" placeholder="Bank Name" onChange={(evt) => setBankName(evt.target.value)} />

          <input
            value={accountName}
            type="text"
            placeholder="Account Name"
            onChange={(evt) => setAccountName(evt.target.value)}
          />

          <input
            type="number"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(evt) => setAccountNumber(evt.target.value)}
          />

          <input
            type="number"
            placeholder="Institution Number"
            value={institutionNumber}
            onChange={(evt) => setInstitutionNumber(evt.target.value)}
          />

          <input
            type="number"
            placeholder="Transit Number"
            value={transitNumber}
            onChange={(evt) => setTransitNumber(evt.target.value)}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <input
              type="radio"
              style={{ marginRight: 13 }}
              checked={isDefault}
              onChange={(evt) => { setIsDefault(evt.target.checked); }}
            />
            <p style={{ margin: 0 }}>Mark this Account as a default</p>
          </div>
        </form>

      </div>

      <div className="action">
        <Button
          disabled={isLoading}
          className="zippy-btn"
          onClick={() => {
            saveAccount();
          }}
        >
          {isLoading && <div className="loading spinner-border" role="status" />}
          Save
        </Button>
      </div>
    </PageContainer>
  );
}
