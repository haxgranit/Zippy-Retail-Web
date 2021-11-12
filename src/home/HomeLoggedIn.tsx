import React from 'react';
import AccountPlaceholders from './AccountPlaceholders';
import VerticalNavLinks from './VerticalNavLinks';

export default function HomeLoggedIn() {
  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <div className="row">
        <div className="col-3">
          <VerticalNavLinks />
        </div>
        <div className="col-9">
          <AccountPlaceholders />
        </div>
      </div>
    </div>
  );
}
