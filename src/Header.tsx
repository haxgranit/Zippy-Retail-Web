import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ZippyCash_Logo from './assets/img/general/ZippyCash_Logo.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src={ZippyCash_Logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-md-column nav-uppercase" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5">
            <li className="nav-item">
              <a className="nav-link fw-bold" aria-current="page" href="#">LANGUAGE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" aria-current="page" href="login.html">LOGIN</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="about.html">about us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="personal.html">personal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="business.html">business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="personal-profile.html">dev docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="search.html">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
