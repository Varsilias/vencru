import logo from "../../../assets/Logo.svg";
import { nav_data as links, settings_support } from "./data";
import featured from "../../../assets/featured-image.png";
import avatar from "../../../assets/Avatar.png";
import logout from "../../../assets/icons/send.svg";
import search from "../../../assets/icons/search.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  const [active, setActive] = useState(false);
  const [path, setPath] = useState("");

  const handleActive = (path: string) => {
    setActive(true);
    setPath(path);
  };
  return (
    <section className="hidden md:block max-[279px]: px-4 pt-6 bg-white w-full">
      <div className="logo w-full">
        <img src={logo} alt="" />
        <div className="search w-full flex items-center border-solid border-[1px] border-[#d0d5dd] p-2 rounded-md my-6">
          <img
            src={search}
            alt="search_icon"
            height="15px"
            width="15px"
            className="mr-[10px]"
          />
          <input
            type="search"
            name="search_bar"
            id="search_bar"
            placeholder="Search"
            className="outline-none border-none block w-[80%]"
          />
        </div>
      </div>

      <div className="nav_links mb-6">
        <div className="regular_links mb-4 w-full">
          <ul className="w-full">
            {links.map((link) => (
              <li
                className="flex font-medium text-base text-[#344054] py-2 w-full"
                key={link.icon}
              >
                <img
                  src={link.icon}
                  alt="home"
                  className="pr-3 opacity-90 w-[12%]"
                />
                <span className="text-left w-[78%]">{link.name}</span>
                {link.count && (
                  <span className="bagde rounded-xl w-[10%] font-medium py-1 px-[6px] text-sm text-[#344054] bg-[#F2F4F7]">
                    {link.count}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="setting_support_links">
          <ul>
            {settings_support.map((item) => (
              <li key={item.icon}>
                <NavLink
                  to={item.to}
                  key={item.icon}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F9FAFB] rounded-md flex font-medium text-base text-[#344054] py-2"
                      : "flex font-medium text-base text-[#344054] py-2"
                  }
                >
                  <img src={item.icon} alt="home" className="pr-3 opacity-90" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="featured_section w-full bg-[#F9FAFB] p-4 rounded-md">
        <h5 className="font-medium text-sm text-[#101828]">
          New features available!
        </h5>
        <p className="font-normal text-sm text-[#667085] py-2">
          Check out the new dashboard view. Pages now load faster.
        </p>
        <img src={featured} alt="new features" className="w-full mb-4" />
        <p>
          <span className="font-medium text-sm text-[#667085] mr-4">
            Dismiss
          </span>
          <span className="font-medium text-sm text-[#6941C6]">
            What's new?
          </span>
        </p>
      </div>

      <div className="h-[1px] bg-[#EAECF0] my-5"></div>

      <div className="me flex w-full pt-4 pb-8">
        <span className="w-[20%]">
          <img src={avatar} alt="my_photo" />
        </span>

        <div className="profile_info w-[60%] flex-auto">
          <h5 className="font-medium text-sm text-[#101828]">Olivia Rhye</h5>
          <p className="font-normal text-sm text-[#667085]">
            olivia@untitledui.com
          </p>
        </div>

        <span className="w-[20%]">
          <img src={logout} alt="logout" />
        </span>
      </div>
    </section>
  );
};

export default SideNav;
