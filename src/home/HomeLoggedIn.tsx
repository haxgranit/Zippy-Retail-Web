import { Outlet } from 'react-router-dom';
import AccountPlaceholders from './AccountPlaceholders';
import VerticalNavLinks from './VerticalNavLinks';

export default function HomeLoggedIn() {
  return (
    <div>
      <div className="row">
        <div className="col-2" style={{ position: 'relative' }}>
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
