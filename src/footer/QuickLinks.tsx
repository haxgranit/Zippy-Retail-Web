import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">Quick Links</div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <ul>
            <li>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li>
              Please Review Our Legal Stuff by visiting our{' '}
              <Link to="/legal" className="text-decoration-none">
                Privacy Policy | TOU | EULA | CardHolder T&amp;C Pages
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-2">
          8465 W Sahara Ave.
          Las Vegas, NEVADA
          <ul>
            <li>
              <a href="tel:+17026231876" className="text-decoration-none">1.702.623.1876</a>
            </li>
            <li>
              <a href="mailto:contact@zippy.cash" className="text-decoration-none">contact@zippy.cash</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}