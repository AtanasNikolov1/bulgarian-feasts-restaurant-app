import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";
import { useAuth } from "../../../context/AuthContext";

const userIcons = [{ icon: "cart-shopping", path: "/cart" }];

const UserNav = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      navigate("/login");
    } else {
      alert(`Logout failed: ${result.message}`);
    }
  };

  return (
    <nav>
      <ul className="flex-column flex items-center gap-8">
        <li className="relative -top-[100px] rounded-xl border-2 border-customOrange px-4 py-2 text-base font-bold uppercase text-customOrange transition-colors duration-450 ease-in-out hover:cursor-pointer hover:bg-customOrange hover:text-lightGray">
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
        {!user && (
          <li className="rounded-2xl p-2 text-3xl text-customOrange transition-all duration-450 ease-in-out hover:cursor-pointer hover:rounded-2xl hover:bg-customOrange hover:text-lightGray">
            <Link to="login">
              <i className={`fa-solid fa-user`}></i>
            </Link>
          </li>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="rounded-2xl p-2 text-3xl text-customOrange transition-all duration-450 ease-in-out hover:cursor-pointer hover:rounded-2xl hover:bg-customOrange hover:text-lightGray"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        )}
      </ul>
    </nav>
  );
};

export default UserNav;
