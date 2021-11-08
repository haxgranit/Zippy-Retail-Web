import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ZippyCash_Logo from './assets/img/general/ZippyCash_Logo.png';

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={ZippyCash_Logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-md-column nav-uppercase" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5">
            <li className="nav-item">
              <Link to="/language" className="nav-link fw-bold" aria-current="page">{t('header.language')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link fw-bold" aria-current="page">{t('header.login')}</Link>
            </li>
          </ul>
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
            <li className="nav-item">
              <Link to="/personal-profile" className="nav-link" aria-current="page">{t('header.personal-profile')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link" aria-current="page">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}