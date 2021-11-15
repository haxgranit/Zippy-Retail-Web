import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Business from './Business';
import BusinessSignup from './BusinessSignup';
import Footer from './footer/Footer';
import Header from './Header';
import Home from './home/Home';
import Legal from './Legal';
import Login from './Login';
import DownloadTransactions from './my-accounts/DownloadTransactions';
import MyAccounts from './my-accounts/MyAccounts';
import StatementPreferences from './my-accounts/StatementPreferences';
import UpcomingBillPaymentsAndTransfers from './my-accounts/UpcomingBillPaymentsAndTransfers';
import ViewAccountDetails from './my-accounts/ViewAccountDetails';
import ViewEStatements from './my-accounts/ViewEStatements';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import PersonalSignup from './PersonalSignup';
import ScrollToTop from './ScrollToTop';

export default function App() {
  useEffect(() => AOS.init(), []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="my-accounts">
            <Route path="/my-accounts" element={<MyAccounts />} />
            <Route path="view-account-details" element={<ViewAccountDetails />} />
            <Route path="download-transactions" element={<DownloadTransactions />} />
            <Route path="view-estatements">
              <Route path="/my-accounts/view-estatements" element={<ViewEStatements />} />
              <Route path="statement-preferences" element={<StatementPreferences />} />
            </Route>
            <Route path="upcoming-bill-payments-and-transfers" element={<UpcomingBillPaymentsAndTransfers />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="business-signup" element={<BusinessSignup />} />
        <Route path="legal" element={<Legal />} />
        <Route path="login" element={<Login />} />
        <Route path="personal" element={<Personal />} />
        <Route path="personal-profile" element={<PersonalProfile />} />
        <Route path="personal-signup" element={<PersonalSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
