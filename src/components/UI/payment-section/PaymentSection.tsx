import BankCards from "./BankCards";
import ContactSelect from "./ContactSelect";
import plusIcon from "../../../assets/plus-Icon.svg";

const PaymentSection = () => {
  return (
    <section className="payment_section pt-8 px-4 w-full">
      <div className="intro">
        <h1 className="font-medium text-lg text-[#101828]">Payment method</h1>
        <p className="font-normal text-base text-[#667085]">
          Update your billing details and address.
        </p>
      </div>

      <div className="h-[2px] bg-[#EAECF0] my-5"></div>

      <div className="contact md:flex">
        <div className="mb-4 md:mr-16">
          <h1 className="font-medium text-sm text-[#344054]">Contact email</h1>
          <p className="font-normal text-sm md:whitespace-nowrap text-[#667085]">
            Where should invoices be sent?
          </p>
        </div>
        <ContactSelect />
      </div>

      <div className="h-[2px] bg-[#EAECF0] my-5"></div>

      <div className="md:flex md:w-full">
        <div className="mb-4 md:mr-16">
          <h1 className="font-medium text-sm text-[#344054]">Card details</h1>
          <p className="font-normal text-sm md:whitespace-nowrap text-[#667085]">
            Select default payment method.
          </p>
        </div>
        <BankCards />
      </div>
    </section>
  );
};

export default PaymentSection;
