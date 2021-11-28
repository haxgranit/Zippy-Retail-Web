import { Outlet } from 'react-router-dom';
import AccountPlaceholders from './AccountPlaceholders';
import HorizontalNavLinks from './HorizontalNavLinks';
import VerticalNavLinks from './VerticalNavLinks';

export default function HomeLoggedIn() {
  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <div className="row">
        <div className="col-2" />
        <div className="col-10">
          <HorizontalNavLinks />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <VerticalNavLinks />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
        <div className="col-2">
          <AccountPlaceholders />
        </div>
      </div>
    </div>
  );
}
