import MenuNav from "../../ui/menuNav/MenuNav";
import UserNav from "../../ui/userNav/UserNav";
import useScrollPosition from "../../../hooks/useScrollPosition";
import darkLogo from "../../../assets/images/dark-logo.png";
import lightLogo from "../../../assets/images/light-logo.png";

function Header({ color }) {
  const scroll = useScrollPosition();

  const headerStyle =
    color === "transparent" && scroll
      ? { backgroundColor: "snow" }
      : { backgroundColor: color === "transparent" ? "transparent" : color };

  return (
    <header
      style={headerStyle}
      className={`fixed top-0 z-10 flex w-full items-center justify-between px-9 py-1.5 shadow-md transition-all duration-300`}
    >
      <img
        src={color === "transparent" && !scroll ? lightLogo : darkLogo}
        alt="logo"
        className="h-20 pl-10 pr-40"
      />
      <MenuNav scroll={scroll} color={color} />
      <UserNav />
    </header>
  );
}

export default Header;
