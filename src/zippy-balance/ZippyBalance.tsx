import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import Api, { Account } from '../api';
import { useAppSelector } from '../app/hooks';
import CommonPageContainer from '../common/CommonPageContainer';
import { selectUser } from '../features/user/userSlice';

export const ZippyBalancePure = ({ account }: { account: Account | undefined }) => (
  <div className="page-content">
    <CommonPageContainer title="Zippy Balance">
      { account !== undefined ? (
        <>
          <span>{account.name}</span>
          <NumberFormat
            className="ms-3"
            value={account.balance}
            displayType="text"
            prefix="$ "
            suffix=" CAD"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
          />
        </>
      ) : 'Loading...' }
    </CommonPageContainer>
  </div>
);

export default function ZippyBalance() {
  const { instance, accounts: msalAccounts } = useMsal();
  const [account, setAccount] = useState<Account | undefined>();
  const { user } = useAppSelector(selectUser);

  useEffect(() => {
    if (user) {
      new Api(instance, msalAccounts[0])
        .listAccounts()
        .then((accounts) => {
          setAccount(accounts[0]);
        });
    }
  }, [msalAccounts, user]);

  return <ZippyBalancePure account={account} />;
}
