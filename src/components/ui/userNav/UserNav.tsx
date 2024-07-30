import { Link } from "react-router-dom";

const userIcons = [
  { icon: "cart-shopping", path: "/cart" },
  { icon: "user", path: "/account" },
];

const UserNav = () => {
  return (
    <nav>
      <ul className="flex-column flex items-center gap-8">
        <li className="rounded-xl border-2 border-customOrange px-4 py-2 text-base font-bold uppercase text-customOrange transition-colors duration-450 ease-in-out hover:cursor-pointer hover:bg-customOrange hover:text-lightGray">
          <a href="#">Book a table</a>
        </li>
        {userIcons.map((icon) => (
          <li
            className="rounded-2xl p-2 text-3xl text-customOrange transition-all duration-450 ease-in-out hover:cursor-pointer hover:rounded-2xl hover:bg-customOrange hover:text-lightGray"
            key={icon.path}
          >
            <Link to={icon.path}>
              <i className={`fa-solid fa-${icon.icon}`}></i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UserNav;
