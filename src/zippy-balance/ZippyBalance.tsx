import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { Spinner } from 'react-bootstrap';
import Api, { Account } from '../api';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import PageContainer from '../common/PageContainer';

export const ZippyBalancePure = ({ account }: { account: Account | undefined }) => (
  <>
    <PageContainer title="Zippy Balance" subTitle="Welcome back!" backdropImage="backdrop-image-1">
      <div className="zippy-balance">
        { account !== undefined ? (
          <>
            <div className="account-name">{account.name}</div>
            <div className="account-balance">
              <p>
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
              </p>
            </div>
          </>
        ) : (
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </PageContainer>
  </>
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
