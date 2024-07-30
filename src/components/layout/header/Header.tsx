import MenuNav from "../../ui/menuNav/MenuNav";
import UserNav from "../../ui/UserNav";
import useScrollPosition from "../../../hooks/useScrollPosition";
import darkLogo from "../../../assets/images/dark-logo.png";
import lightLogo from "../../../assets/images/light-logo.png";

function Header() {
  const scroll = useScrollPosition();

  return (
    <header
      className={`fixed top-0 flex w-full items-center justify-between ${scroll ? "bg-white shadow-md" : "bg-transparent"} z-10 px-9 py-1.5 transition-all duration-300`}
    >
      <img
        src={scroll ? darkLogo : lightLogo}
        alt="logo"
        className="h-20 pl-10 pr-40"
      />
      <MenuNav scroll={scroll} />
      <UserNav />
    </header>
  );
}

export default Header;
