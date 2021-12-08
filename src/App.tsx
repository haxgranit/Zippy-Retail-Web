import AOS from 'aos';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import About from './About';
import AccountSecurity from './account-security/AccountSecurity';
import Api from './api';
import BillerDetails from './bill-payments/biller-details/BillerDetails';
import AddOrEditBillers from './bill-payments/add-or-edit-billers/AddOrEditBillers';
import BillPayments from './bill-payments/bill-payments/BillPayments';
import ReviewAndCancelBillPayments from './bill-payments/review-and-cancel-bill-payments/ReviewAndCancelBillPayments';
import SetUpBillPayments from './bill-payments/set-up-bill-payments/SetUpBillPayments';
import ViewEBills from './bill-payments/view-ebills/ViewEBills';
import Business from './Business';
import ContactUs from './contact-us/ContactUs';
import CreateOrEditAccountNickname from './customer-services/create-or-edit-account-nickname/CreateOrEditAccountNickname';
import ChangeYourAddress from './customer-services/change-your-address/ChangeYourAddress';
import CustomerServices from './customer-services/customer-services/CustomerServices';
import Footer from './footer/Footer';
import Header from './Header';
import AutodepositSettings from './interac-etransfer/autodeposit-settings/AutodepositSettings';
import ContactList from './interac-etransfer/contact-list/ContactList';
import EditMyProfile from './interac-etransfer/edit-my-profile/EditMyProfile';
import LearnMore from './interac-etransfer/learn-more/LearnMore';
import ReceiveMoney from './interac-etransfer/receive-money/ReceiveMoney';
import RequestMoney from './interac-etransfer/request-money/RequestMoney';
import SendMoney from './interac-etransfer/send-money/SendMoney';
import Status from './interac-etransfer/status/Status';
import Home from './home/Home';
import Legal from './Legal';
import ManageMyAlerts from './manage-my-alerts/ManageMyAlerts';
import MyAccounts from './my-accounts/my-accounts/MyAccounts';
import DownloadTransactions from './my-accounts/download-transactions/DownloadTransactions';
import StatementPreferences from './my-accounts/view-estatements/statement-preferences/StatementPreferences';
import UpcomingBillPaymentsAndTransfers from './my-accounts/upcoming-bill-payments-and-transfer/UpcomingBillPaymentsAndTransfers';
import ViewAccountDetails from './my-accounts/view-account-details/ViewAccountDetails';
import ViewEStatements from './my-accounts/view-estatements/ViewEStatements';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import ScrollToTop from './ScrollToTop';
import EFT from './transfer-funds/EFT';
import ReviewAndCancelTransfers from './transfer-funds/review-and-cancel-transfers/ReviewAndCancelTransfers';
import TransferFunds from './transfer-funds/transfer-funds/TransferFunds';
import VisaDirect from './transfer-funds/VisaDirect';
import ZippyToZippy from './transfer-funds/ZippyToZippy';
import ChangeYourPassword from './customer-services/change-your-password/ChangeYourPassword';
import ChangeYourContactInformation from './customer-services/change-contact-information/ChangeYourContactInformation';
import AddACardHolder from './customer-services/add-a-cardholder/AddACardHolder';
import OrderCheques from './customer-services/order-cheques/OrderCheques';
import EbillsEmailNotification from './customer-services/ebills-email-notification/EbillsEmailNotification';
import ChangeYourTaxResidency from './customer-services/change-your-tax-residency/ChangeYourTaxResidency';
import CreateAClickToPayAccount from './customer-services/create-a-click-to-pay-account/CreateAClickToPayAccount';
import MakeALoanPayment from './customer-services/make-a-loan-payment/MakeALoanPayment';
import MakeAMortgagePayment from './customer-services/make-a-mortgage-payment/MakeAMortgagePayment';
import ApplyForOrChangeOverdraftProtectionService from './customer-services/apply-for-or-change-overdraft-protection-service/ApplyForOrChangeOverdraftProtectionService';
import MakeAPaymentWithPoints from './customer-services/make-a-payment-with-points/MakeAPaymentWithPoints';
import RemoveAssociationToOnlineInvestmentAccount from './customer-services/remove-association-to-online-investment-account/RemoveAssociationToOnlineInvestmentAccount';
import RequestACreditCardBalanceTransfer from './customer-services/request-a-credit-card-balance-transfer/RequestACreditCardBalanceTransfer';
import ApplyForACreditLimitIncrease from './customer-services/apply-for-a-credit-limit-increase/ApplyForACreditLimitIncrease';
import SetUpDirectDepositWithCanadaRevenueAgency from './customer-services/set-up-direct-deposit-with-canada-revenue-agency/SetUpDirectDepositWithCanadaRevenueAgency';
import StopPayments from './customer-services/stop-payments/StopPayments';
import WithdrawFromATfsa from './customer-services/withdraw-from-a-tfsa/WithdrawFromATfsa';
import PayAndFileBusinessTaxes from './customer-services/pay-and-file-business-taxes/PayAndFileBusinessTaxes';
import ApplyForPaymentProtectorInsuranceForCreditCards from './customer-services/apply-for-payment-protector-insurance-for-credit-cards/ApplyForPaymentProtectorInsuranceForCreditCards';
import ChangeMortgagePaymentAmount from './customer-services/change-mortgage-payment-details/ChangeMortgagePaymentDetails';
import UnlinkAccountsFromYourDebitCard from './customer-services/unlink-accounts-from-your-debit-card/UnlinkAccountsFromYourDebitCard';
import DigitalVaultDocuments from './customer-services/digital-vault-documents/DigitalVaultDocuments';
import ContributeToTfsa from './customer-services/contribute-to-a-tfsa/ContributeToATfsa';
import RequestSent from './interac-etransfer/status/request-sent/RequestSent';
import RequestReminder from './interac-etransfer/status/request-reminder/RequestReminder';
import RequestCanceled from './interac-etransfer/status/request-canceled/RequestCanceled';

export default function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts: msalAccounts } = useMsal();

  useEffect(() => {
    if (isAuthenticated) {
      // TODO: replace this placeholder request with a real post-login request to get account info,
      // user info, etc.
      new Api(instance, msalAccounts[0]).getRegions()
        .then((regions) => {
          /* eslint-disable-next-line no-console */
          console.log('regions', regions);
        })
        .catch((error) => {
          /* eslint-disable-next-line no-console */
          console.error('regions', error);
        });
    }
  }, [isAuthenticated, instance, msalAccounts]);

  useEffect(() => AOS.init(), []);

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="account-security" element={<AccountSecurity />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="customer-services">
            <Route path="/customer-services" element={<CustomerServices />} />
            <Route path="create-or-edit-account-nickname" element={<CreateOrEditAccountNickname />} />
            <Route path="change-your-address" element={<ChangeYourAddress />} />
            <Route path="change-your-password" element={<ChangeYourPassword />} />
            <Route path="change-your-contact-information" element={<ChangeYourContactInformation />} />
            <Route path="add-a-cardholder" element={<AddACardHolder />} />
            <Route path="order-cheques" element={<OrderCheques />} />
            <Route path="set-up-ebills-email-notification" element={<EbillsEmailNotification />} />
            <Route path="change-your-tax-residency" element={<ChangeYourTaxResidency />} />
            <Route path="create-a-click-to-pay-account" element={<CreateAClickToPayAccount />} />
            <Route path="make-a-loan-payment" element={<MakeALoanPayment />} />
            <Route path="make-a-mortgage-payment" element={<MakeAMortgagePayment />} />
            <Route path="apply-for-or-change-overdraft-protection-service" element={<ApplyForOrChangeOverdraftProtectionService />} />
            <Route path="make-a-payment-with-points" element={<MakeAPaymentWithPoints />} />
            <Route path="remove-association-to-online-investment-account" element={<RemoveAssociationToOnlineInvestmentAccount />} />
            <Route path="request-a-credit-card-balance-transfer" element={<RequestACreditCardBalanceTransfer />} />
            <Route path="apply-for-a-credit-limit-increase" element={<ApplyForACreditLimitIncrease />} />
            <Route path="set-up-direct-deposit-with-canada-revenue-agency" element={<SetUpDirectDepositWithCanadaRevenueAgency />} />
            <Route path="stop-payments" element={<StopPayments />} />
            <Route path="withdraw-from-a-tfsa" element={<WithdrawFromATfsa />} />
            <Route path="pay-and-file-business-taxes" element={<PayAndFileBusinessTaxes />} />
            <Route path="apply-for-payment-protector-insurance-for-credit-cards" element={<ApplyForPaymentProtectorInsuranceForCreditCards />} />
            <Route path="change-mortgage-payment-details" element={<ChangeMortgagePaymentAmount />} />
            <Route path="unlink-accounts-from-your-debit-card" element={<UnlinkAccountsFromYourDebitCard />} />
            <Route path="digital-vault-documents" element={<DigitalVaultDocuments />} />
            <Route path="contribute-to-a-tfsa" element={<ContributeToTfsa />} />
          </Route>
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
            <Route path="status">
              <Route path="/interac-etransfer/status" element={<Status />} />
              <Route path="request-sent" element={<RequestSent />} />
              <Route path="request-reminder" element={<RequestReminder />} />
              <Route path="request-canceled" element={<RequestCanceled />} />
            </Route>
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
            <Route path="zippy-to-zippy" element={<ZippyToZippy />} />
            <Route path="eft" element={<EFT />} />
            <Route path="visa-direct" element={<VisaDirect />} />
            <Route path="review-and-cancel-transfers" element={<ReviewAndCancelTransfers />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="legal" element={<Legal />} />
        <Route path="personal" element={<Personal />} />
        <Route path="personal-profile" element={<PersonalProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}
