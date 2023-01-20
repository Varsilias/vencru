import downloadIcon from "../../../assets/download-icon.svg";
import Table from "./Table";
const BillingHistory = () => {
  return (
    <section className="w-full">
      <div className="intro px-4 mb-6 md:flex md:justify-between">
        <div className="mb-3 pt-2">
          <h1 className="font-medium text-lg text-[#101828]">
            Billing History
          </h1>
        </div>
        <div className="download_button">
          <button className="flex bg-white p-3 rounded-md border-solid border-[1px] border-[#d0d5dd]">
            <img src={downloadIcon} alt="" />
            <span className="text-sm font-medium pl-2 text-[#344054]">
              Download all
            </span>
          </button>
        </div>
      </div>
      <Table />
    </section>
  );
};

export default BillingHistory;
