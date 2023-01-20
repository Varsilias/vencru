import logo from "../../../assets/Logo.svg";
import hamburger from "../../../assets/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="navbar_container w-full flex justify-between bg-white p-4 drop-shadow-md md:hidden">
      <div className="logo_container">
        <img src={logo} alt="vencru_logo" />
      </div>
      <div className="hambuger_container mt-2">
        <img src={hamburger} alt="vencru_menu_bar" />
      </div>
    </nav>
  );
};

export default Navbar;
