import { tab_list_items as tabs } from "./data";

const Tab = () => {
  return (
    <div className="w-full">
      <section className="tab_section pt-8 px-4 w-full">
        <div className="intro">
          <h1 className="font-medium text-2xl text-[#101828]">Settings</h1>
          <p className="font-normal text-base text-[#667085]">
            Manage your team preferences here.
          </p>
        </div>
      </section>
      <div className="tabs w-full mt-4 md:px-4">
        <ul className="flex w-full overflow-x-auto">
          {tabs.map((tab) => (
            <li
              className={`tab_item bg-white flex justify-center items-center text-sm font-medium text-[#344054] whitespace-nowrap  border-solid border-l-[1px] border-y-[1px] last:border-r-[1px] border-[#d0d5dd]`}
              key={tab.name}
            >
              <button className="px-4 py-2 focus:outline-none focus:bg-[#f9fafb]">
                {tab.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tab;
