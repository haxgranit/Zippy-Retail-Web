import AOS from 'aos';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Api from './api';
import { useAppDispatch } from './app/hooks';
import { load } from './features/user/userSlice';
import About from './About';
import AccountSecurity from './account-security/AccountSecurity';
import BillPayments from './bill-payments/BillPayments';
import Business from './Business';
import ContactUs from './contact-us/ContactUs';
import { Header } from './Header';
import ZippyTransaction from './my-wallet/zippy-money/ZippyTransaction';
import Home from './home/Home';
import Legal from './Legal';
import ManageMyAlerts from './manage-my-alerts/ManageMyAlerts';
import MyWallet from './my-wallet/my-wallet/MyWallet';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import ScrollToTop from './ScrollToTop';
import i18n from './i18n/config';
import LoadStatus from './my-wallet/load/LoadStatus/LoadStatus';
import LoadInitiate from './my-wallet/load/LoadInitiate/LoadInitiate';
import TransferDetails from './my-wallet/load/TransferDetails/TransferDetails';
import TransactionStatusList from './my-wallet/status/TransactionStatusList/TransactionStatusList';
import FundingSourceDetails from './my-wallet/funding-source/FundingSourceDetails/FundingSourceDetails';
import FundingSourceList from './my-wallet/funding-source/FundingSourceList/FundingSourceList';
import TransactionStatus from './my-wallet/status/TransactionDetails/TransactionStatus';
import AutoDeposit from './my-wallet/auto-deposit/AutoDeposit';
import Account from './my-account/account/Account';
import DownloadTransactions from './my-account/download-transactions/DownloadTransactions';
import ViewEstatements from './my-account/view-estatements/ViewEstatements';
import CustomerServices from './customer-services/CustomerServices';

export default function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useIsAuthenticated();
  const { accounts, instance } = useMsal();
  const { search } = useLocation();
  const languageCode = new URLSearchParams(search).get('language');

  useEffect(() => {
    if (isAuthenticated) {
      new Api(instance, accounts[0])
        .putUser()
        .then((user) => dispatch(load(user)));
    }
  }, [isAuthenticated, instance, accounts]);

  useEffect(() => {
    if (languageCode) {
      i18n.changeLanguage(languageCode);
    }
  }, [languageCode]);

  useEffect(() => AOS.init(), []);

  return (
    <main className="main-container">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Navigate replace to="/my-wallet" />} />
          <Route path="account-security" element={<AccountSecurity />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="customer-services" element={<CustomerServices />} />
          <Route path="bill-payments" element={<BillPayments />} />
          <Route path="my-wallet">
            <Route path="/my-wallet" element={<MyWallet />} />
            <Route path="zippy-money" element={<ZippyTransaction />}>
              <Route path=":transactionMethod/:transactionType/:step" element={<ZippyTransaction />}>
                <Route path=":transactionId" element={<ZippyTransaction />} />
              </Route>
            </Route>
            <Route path="load">
              <Route path="status" element={<LoadStatus mode="load" />} />
              <Route path="" element={<LoadInitiate mode="load" />} />
              <Route path="transfer-details" element={<TransferDetails />} />
            </Route>
            <Route path="get">
              <Route path="status" element={<LoadStatus mode="get" />} />
              <Route path="" element={<LoadInitiate mode="get" />} />
              <Route path="transfer-details" element={<TransferDetails />} />
            </Route>
            <Route path="transaction-history" element={<TransactionStatusList />}>
              <Route path=":type" element={<TransactionStatusList />} />
            </Route>
            <Route path="transaction-history/:type/:status/:id" element={<TransactionStatus />} />
            <Route path="funding-source">
              <Route path="" element={<FundingSourceList />} />
              <Route path="add-funding-source" element={<FundingSourceDetails />} />
              <Route path="edit-funding-source/:id" element={<FundingSourceDetails />} />
            </Route>
            <Route path="auto-deposit" element={<AutoDeposit />} />
          </Route>
          <Route path="manage-my-alerts" element={<ManageMyAlerts />} />
          <Route path="my-account">
            <Route path="/my-account" element={<Navigate replace to="/my-account/account" />} />
            <Route path="account" element={<Account />} />
            <Route path="download-transactions" element={<DownloadTransactions />} />
            <Route path="view-estatements" element={<ViewEstatements />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="legal" element={<Legal />} />
        <Route path="personal" element={<Personal />} />
        <Route path="personal-profile" element={<PersonalProfile />} />
      </Routes>
    </main>
  );
}
