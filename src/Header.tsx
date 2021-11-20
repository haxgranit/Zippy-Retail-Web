import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import ZippyCash_Logo from './assets/img/general/ZippyCash_Logo.png';
import { selectUser } from './features/user/userSlice';

export default function Header() {
  const user = useAppSelector(selectUser);
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
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-CA')}>English (Canada)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-US')}>English (US)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fr-CA')}>French (Canada)</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('es-US')}>Spanish (US)</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <Link to="/login" className="nav-link fw-bold" aria-current="page">{t('header.login')}</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user.loggedIn && (
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">{t('header.about')}</Link>
              </li>
            )}
            {(!user.loggedIn || !user.personal) && (
              <li className="nav-item">
                <Link to="/personal" className="nav-link" aria-current="page">{t('header.personal')}</Link>
              </li>
            )}
            {(!user.loggedIn || !user.business) && (
              <li className="nav-item">
                <Link to="/business" className="nav-link" aria-current="page">{t('header.business')}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
