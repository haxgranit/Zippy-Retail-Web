import React from 'react';
import AccountPlaceholders from './AccountPlaceholders';
import HorizontalNavLinks from './HorizontalNavLinks';
import VerticalNavLinks from './VerticalNavLinks';
import downloadTransactions from './DownloadTransactions.png';

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
          <img src={downloadTransactions} alt="placeholder" style={{ width: '100%' }} />
        </div>
        <div className="col-2">
          <AccountPlaceholders />
        </div>
      </div>
    </div>
  );
}
