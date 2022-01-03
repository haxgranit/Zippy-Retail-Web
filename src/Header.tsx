import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loginRequest } from './authConfig';
import { selectUser, unload } from './features/user/userSlice';
import ZippyCashLogo from './assets/img/general/ZippyCash_Logo.svg';
import { User } from './api';

export const HeaderPure = ({
  isAuthenticated,
  user,
  isInProgress,
  handleLogin,
  handleLogout,
}: {
  isAuthenticated: boolean,
  user: User,
  isInProgress: boolean,
  handleLogin: () => void,
  handleLogout: () => void
}) => {
  const { i18n, t } = useTranslation();
  const getFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');

  return (
    <nav className="header-layout navbar navbar-expand-lg navbar-light">
      <div className="left-side-header">
        <Link to="/" className="navbar-brand">
          <img src={ZippyCashLogo} alt="" />
        </Link>
      </div>
      <div className="content">
        <div className="search-box">
          <i className="zippy-cash-icon zc-search" />
          <Form.Control
            type="input"
            placeholder="Search..."
            onChange={(evt) => console.log(evt)}
          />
          <Form.Select
            onChange={(evt) => console.log(evt)}
            value="all"
          >
            <option value="all">All</option>
          </Form.Select>
        </div>
      </div>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5">
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
            <NavDropdown title={getFullName()}>
              {(isAuthenticated && (
                <NavDropdown.Item onClick={() => handleLogout()} className="nav-dropdown-item">
                  {t('header.logout')}
                </NavDropdown.Item>
              )) || (
                !isInProgress && (
                  <NavDropdown.Item onClick={() => handleLogin()} className="nav-dropdown-item">
                    {t('header.login')}
                  </NavDropdown.Item>
                )
              )}
            </NavDropdown>
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
};

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const isInProgress = inProgress === InteractionStatus.Startup
    || inProgress === InteractionStatus.HandleRedirect;

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    dispatch(unload());
    instance.logoutRedirect();
  };

  return (
    <HeaderPure
      user={user || { email: null, firstName: null, lastName: null } as unknown as User}
      isAuthenticated={isAuthenticated}
      isInProgress={isInProgress}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};
