import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../../api';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import PageContainer from '../../common/PageContainer';
import { Account } from '../../constants/type/Account';

export const MyWalletPure = ({ account }: { account: Account | undefined }) => {
  const navigate = useNavigate();

  return (
    <>
      <PageContainer title="Zippy Balance" subTitle="Welcome back!" backdropImage="backdrop-image-1">
        <div className="body">
          <div className="zippy-balance">
            { account !== undefined ? (
              <>
                <div className="account-balance">
                  <div>Your Zippy Balance is</div>
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
                <div className="account-name">{account.name}</div>
              </>
            ) : (
              <Spinner className="spinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </div>
        </div>
        { account !== undefined && (
          <div className="action pair">
            <Button
              className="zippy-btn"
              onClick={() => navigate('/my-wallet/zippy-money/zippy-cash/send/transaction-start')}
            >
              Send Money
            </Button>
            <Button
              className="zippy-btn"
              onClick={() => navigate('/my-wallet/zippy-money/zippy-cash/request/transaction-start')}
            >
              Request Money
            </Button>
          </div>
        )}
      </PageContainer>
    </>
  );
};

export default function MyWallet() {
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

  return <MyWalletPure account={account} />;
}
