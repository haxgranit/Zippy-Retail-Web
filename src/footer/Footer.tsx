import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="container mb-3">
      <QuickLinks />
      <Copyright />
      {/* Tab and desktop footer */}
      <div className="d-none d-md-block">
        <div className="d-flex justify-content-between border-bottom"></div>
        <div className="d-flex justify-content-between border-top">
          <div className="">
            <div className="footer-link mt-1">
              <Link to="/personal-profile" className="text-decoration-none">dev docs</Link>
            </div>
          </div>
          <div className="copyright mt-1">
            <span className="text-decoration-none">© 2021 Lorem ipsum dolor sit amet, consectetuer</span>
          </div>
        </div>
      </div>
      {/* mobile only footer */}
      <div className="d-block d-md-none">
        <div className="d-flex border-bottom">
          <div className="d-flex flex-column me-2">
            <div className="footer-link mb-1">
              <Link to="/personal-profile" className="text-decoration-none">dev docs</Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end border-top">
          <div className="copyright mt-2 text-end small">
            <span className="text-decoration-none">© 2021 Lorem ipsum dolor sit amet, consectetuer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}