import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loginRequest } from './authConfig';
import { selectUser, unload } from './features/user/userSlice';
import ZippyCashLogo from './assets/img/general/ZippyCash_Logo.png';
import Api, { Account } from './api';

export const HeaderPure = ({
  account,
  isAuthenticated,
  userFullName,
  isInProgress,
  handleLogin,
  handleLogout,
}: {
  account: Account | undefined,
  isAuthenticated: boolean,
  userFullName: string,
  isInProgress: boolean,
  handleLogin: () => void,
  handleLogout: () => void
}) => {
  const { i18n, t } = useTranslation();

  return (
    <nav className={`header-layout navbar navbar-expand-lg navbar-light ${!isAuthenticated && 'container'}`}>
      <div className="left-side-header">
        { !isAuthenticated && (
          <Link to="/" className="navbar-brand">
            <img src={ZippyCashLogo} alt="" />
          </Link>
        )}
      </div>
      <div className="content" />
      <div className="right-side-header">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-md-column nav-uppercase" id="navbarSupportedContent">
          <div className="navbar-nav">
            <div className="nav-node-wrap wallet-balance">
              <div className="nav-node">
                <i className="zippy-cash-icon zc-wallet" />
                <NumberFormat
                  className="amount"
                  value={account?.balance}
                  defaultValue={0}
                  displayType="text"
                  prefix="$"
                  thousandSeparator
                  decimalScale={2}
                  fixedDecimalScale
                />
              </div>
            </div>
            <div className="nav-node-wrap">
              <div className="nav-node">
                <NavDropdown title={t('header.language')}>
                  <NavDropdown.Item onClick={() => i18n.changeLanguage('en-CA')} className="nav-dropdown-item">
                    English (Canada)
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('en-US')} className="nav-dropdown-item">
                    English (US)
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => i18n.changeLanguage('fr-CA')} className="nav-dropdown-item">
                    French (Canada)
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('es-US')} className="nav-dropdown-item">
                    Spanish (US)
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            {(isAuthenticated && (
              <div className="nav-node-wrap">
                <div className="nav-node">
                  <NavDropdown title={userFullName || t('header.login')}>
                    <NavDropdown.Item onClick={() => handleLogout()} className="nav-dropdown-item">
                      {t('header.logout')}
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            )) || (
              !isInProgress && (
                <div className="nav-node">
                  <div className="nav-node">
                    <Button onClick={() => handleLogin()} variant="transparent light">
                      {t('header.login')}
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
          {!isAuthenticated && (
            <ul className="home-pages-links navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">{t('header.about')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/personal" className="nav-link" aria-current="page">{t('header.personal')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link" aria-current="page">{t('header.business')}</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance, accounts: msalAccounts } = useMsal();
  const { user } = useAppSelector(selectUser);
  const [account, setAccount] = useState<Account | undefined>();

  const dispatch = useAppDispatch();
  const isInProgress = inProgress === InteractionStatus.Startup
      || inProgress === InteractionStatus.HandleRedirect;
  const getFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const handleLogin = () => instance.loginRedirect(loginRequest);
  const handleLogout = () => {
    dispatch(unload());
    instance.logoutRedirect();
  };

  useEffect(() => {
    if (user) {
      new Api(instance, msalAccounts[0])
        .listAccounts()
        .then((accounts) => {
          setAccount(accounts[0]);
        });
    }
  }, [msalAccounts, user]);

  return (
    <HeaderPure
      account={account}
      userFullName={getFullName()}
      isAuthenticated={isAuthenticated}
      isInProgress={isInProgress}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};
