import Navbar from "../components/UI/navbar/Navbar";
import Tab from "../components/UI/tab/Tab";
import PaymentSection from "../components/UI/payment-section/PaymentSection";
import BillingHistory from "../components/UI/billing-history/BillingHistory";
import SideNav from "../components/UI/navbar/SideNav";

const Settings = () => {
  return (
    <div className="flex h-screen">
      <section className="h-full overflow-y-scroll">
        <SideNav />
      </section>
      <section className="setting_section overflow-y-scroll w-full">
        <Navbar />
        <Tab />
        <PaymentSection />
        <BillingHistory />
      </section>
    </div>
  );
};

export default Settings;
