import styles from "./Header.module.css";

function Header() {
  return (
    <header className="flex items-center justify-between bg-lightGray px-9 py-1.5">
      <img
        src="./images/logo-transparent.png"
        alt="logo"
        className="h-20 pl-10 pr-40"
      />
      <nav className={`pt-0.5 ${styles.mainNav}`}>
        <ul className="flex-column flex gap-10 text-lg font-bold text-lightBlack">
          <li className="relative">
            <a href="#">Home</a>
          </li>
          <li className="relative">
            <a href="#">Menu</a>
          </li>
          <li className="relative">
            <a href="#">About</a>
          </li>
          <li className="relative">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex-column flex items-center gap-8">
          <li className="rounded-xl border-2 border-customOrange px-4 py-2 text-base font-bold uppercase text-customOrange transition-colors duration-450 ease-in-out hover:cursor-pointer hover:bg-customOrange hover:text-lightGray">
            <a href="#">Book a table</a>
          </li>
          <li className="rounded-2xl p-2 text-3xl text-customOrange transition-all duration-450 ease-in-out hover:cursor-pointer hover:rounded-2xl hover:bg-customOrange hover:text-lightGray">
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li className="rounded-2xl p-2 text-3xl text-customOrange transition-all duration-450 ease-in-out hover:cursor-pointer hover:rounded-2xl hover:bg-customOrange hover:text-lightGray">
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
