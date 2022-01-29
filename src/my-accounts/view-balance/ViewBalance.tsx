import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import Api from '../../api';
import CommonPageContainer from '../../common/CommonPageContainer';

export const ViewBalancePure = ({ balance }: { balance: number | undefined }) => (
  <div>
    <CommonPageContainer title="Zippy Balance">
      { balance !== undefined ? `$${balance.toFixed(2)}` : 'Loading...' }
    </CommonPageContainer>
  </div>
);

export default function ViewBalance() {
  const { instance, accounts: msalAccounts } = useMsal();
  const [balance, setBalance] = useState<number | undefined>();

  useEffect(() => {
    new Api(instance, msalAccounts[0])
      .listAccounts()
      .then((accounts) => {
        setBalance(accounts[0].balance);
      });
  }, [msalAccounts]);

  return <ViewBalancePure balance={balance} />;
}
