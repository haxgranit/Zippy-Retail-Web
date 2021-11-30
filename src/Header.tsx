/* eslint-disable no-console */

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Api, { Account } from './api';
import ZippyCash_Logo from './assets/img/general/ZippyCash_Logo.png';
import { loginRequest } from './authConfig';

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance, accounts: msalAccounts } = useMsal();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      const api = new Api(instance, msalAccounts[0]);
      api.profile().then((profileResponse) => console.log('profile', profileResponse));
      api.accounts().then((accountsResponse) => setAccounts(accountsResponse!));
    }
  }, [isAuthenticated, instance, msalAccounts]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={ZippyCash_Logo} alt="" />
        </Link>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5">
            {(!!accounts.length && (
              <NavDropdown title={<span style={{ color: 'inherit', fontWeight: 700 }}>{t('header.accounts')}</span>}>
                {accounts.map((account) => (
                  <NavDropdown.Item key={account.number}>{account.number}</NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
            <NavDropdown title={<span style={{ color: 'inherit', fontWeight: 700 }}>{t('header.language')}</span>}>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-CA')}>English (Canada)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-US')}>English (US)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fr-CA')}>French (Canada)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('es-US')}>Spanish (US)</NavDropdown.Item>
            </NavDropdown>
            {(isAuthenticated && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link fw-bold shadow-none"
                  onClick={() => instance.logoutRedirect()}
                >
                  {t('header.logout')}
                </button>
              </li>
            )) || (
              inProgress !== InteractionStatus.Startup
              && inProgress !== InteractionStatus.HandleRedirect
              && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link nav-link fw-bold shadow-none"
                    onClick={() => {
                      setAccounts([]);
                      instance.loginRedirect(loginRequest);
                    }}
                  >
                    {t('header.login')}
                  </button>
                </li>
              )
            )}
          </ul>
          {!isAuthenticated && (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
}
