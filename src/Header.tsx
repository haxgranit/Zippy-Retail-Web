import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import ZippyCash_Logo from './assets/img/general/ZippyCash_Logo.png';
import { loginRequest } from './authConfig';
import { unload } from './features/user/userSlice';

export const HeaderPure = ({
  isAuthenticated,
  isInProgress,
  handleLogin,
  handleLogout,
}: {
  isAuthenticated: boolean,
  isInProgress: boolean,
  handleLogin: () => void,
  handleLogout: () => void
}) => {
  const { i18n, t } = useTranslation();
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
            <NavDropdown title={<span style={{ color: 'inherit', fontWeight: 700 }}>{t('header.language')}</span>}>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-CA')} className="nav-dropdown-item">English (Canada)</NavDropdown.Item>
              <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('en-US')} className="nav-dropdown-item">English (US)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fr-CA')} className="nav-dropdown-item">French (Canada)</NavDropdown.Item>
              <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('es-US')} className="nav-dropdown-item">Spanish (US)</NavDropdown.Item>
            </NavDropdown>
            {(isAuthenticated && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link fw-bold shadow-none"
                  onClick={() => handleLogout()}
                >
                  {t('header.logout')}
                </button>
              </li>
            )) || (
              !isInProgress && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link nav-link fw-bold shadow-none"
                    onClick={() => handleLogin()}
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
};

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();
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
      isAuthenticated={isAuthenticated}
      isInProgress={isInProgress}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};
