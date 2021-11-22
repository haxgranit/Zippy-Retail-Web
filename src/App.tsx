import { useEffect } from 'react';
import AOS from 'aos';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './About';
import AddOrEditBillers from './bill-payments/AddOrEditBillers';
import BillerDetails from './bill-payments/BillerDetails';
import BillPayments from './bill-payments/BillPayments';
import ReviewAndCancelBillPayments from './bill-payments/ReviewAndCancelBillPayments';
import SetUpBillPayments from './bill-payments/SetUpBillPayments';
import ViewEBills from './bill-payments/ViewEBills';
import Business from './Business';
import Footer from './footer/Footer';
import Header from './Header';
import AutodepositSettings from './interac-etransfer/AutodepositSettings';
import ContactList from './interac-etransfer/ContactList';
import EditMyProfile from './interac-etransfer/EditMyProfile';
import LearnMore from './interac-etransfer/LearnMore';
import ReceiveMoney from './interac-etransfer/ReceiveMoney';
import RequestMoney from './interac-etransfer/RequestMoney';
import SendMoney from './interac-etransfer/SendMoney';
import Status from './interac-etransfer/Status';
import Home from './home/Home';
import Legal from './Legal';
import Login from './Login';
import Logout from './Logout';
import DownloadTransactions from './my-accounts/download-transactions/DownloadTransactions';
import MyAccounts from './my-accounts/MyAccounts';
import StatementPreferences from './my-accounts/StatementPreferences';
import UpcomingBillPaymentsAndTransfers from './my-accounts/UpcomingBillPaymentsAndTransfers';
import ViewAccountDetails from './my-accounts/view-account-details/ViewAccountDetails';
import ViewEStatements from './my-accounts/ViewEStatements';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import ScrollToTop from './ScrollToTop';
import EFT from './transfer-funds/EFT';
import ReviewAndCancelTransfers from './transfer-funds/ReviewAndCancelTransfers';
import TransferFunds from './transfer-funds/TransferFunds';
import VisaDirect from './transfer-funds/VisaDirect';
import AccountSecurity from './account-security/AccountSecurity';
import CustomerServices from './customer-services/CustomerServices';
import ContactUs from './contact-us/ContactUs';
import ManageMyAlerts from './manage-my-alerts/ManageMyAlerts';
import Signup from './Signup';

export default function App() {
  useEffect(() => AOS.init(), []);

  const { pathname } = useLocation();
  const isRedirect = pathname === '/login' || pathname === '/logout' || pathname === '/signup';

  return (
    <div>
      <ScrollToTop />
      {!isRedirect && <Header />}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="account-security" element={<AccountSecurity />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="customer-services" element={<CustomerServices />} />
          <Route path="bill-payments">
            <Route path="/bill-payments" element={<BillPayments />} />
            <Route path="set-up-bill-payments" element={<SetUpBillPayments />} />
            <Route path="review-and-cancel-bill-payments" element={<ReviewAndCancelBillPayments />} />
            <Route path="add-or-edit-billers" element={<AddOrEditBillers />} />
            <Route path="biller-details" element={<BillerDetails />} />
            <Route path="view-ebills" element={<ViewEBills />} />
          </Route>
          <Route path="interac-etransfer">
            <Route path="/interac-etransfer" element={<Navigate to="/interac-etransfer/status" />} />
            <Route path="status" element={<Status />} />
            <Route path="send-money" element={<SendMoney />} />
            <Route path="request-money" element={<RequestMoney />} />
            <Route path="contact-list" element={<ContactList />} />
            <Route path="edit-my-profile" element={<EditMyProfile />} />
            <Route path="autodeposit-settings" element={<AutodepositSettings />} />
            <Route path="receive-money" element={<ReceiveMoney />} />
            <Route path="learn-more" element={<LearnMore />} />
          </Route>
          <Route path="manage-my-alerts" element={<ManageMyAlerts />} />
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
          <Route path="transfer-funds">
            <Route path="/transfer-funds" element={<TransferFunds />} />
            <Route path="eft" element={<EFT />} />
            <Route path="visa-direct" element={<VisaDirect />} />
            <Route path="review-and-cancel-transfers" element={<ReviewAndCancelTransfers />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="legal" element={<Legal />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="personal" element={<Personal />} />
        <Route path="personal-profile" element={<PersonalProfile />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {!isRedirect && <Footer />}
    </div>
  );
}
