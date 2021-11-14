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
import MyAccounts from './my-accounts/MyAccounts';
import DownloadTransactions from './my-accounts/routes/DownloadTransactions';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import PersonalSignup from './PersonalSignup';
import ScrollToTop from './ScrollToTop';
import ViewAccountDetails from './my-accounts/routes/ViewAccountDetails';

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
