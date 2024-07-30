import { Link } from "react-router-dom";
import styles from "./MenuNav.module.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MenuNav = ({ scroll }) => {
  return (
    <nav className={`pt-0.5 ${styles.mainNav}`}>
      <ul
        className={`flex-column flex gap-10 text-lg font-bold text-lightBlack ${scroll ? "text-lightBlack" : "text-snow"}`}
      >
        {navItems.map((item) => (
          <li className="relative" key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNav;
