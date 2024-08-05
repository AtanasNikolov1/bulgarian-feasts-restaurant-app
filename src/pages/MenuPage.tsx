import CategoryFilter from "../components/features/menu/CategoryFilter";
import MenuHeroSection from "../components/features/menu/MenuHeroSection";
import MenuItems from "../components/features/menu/MenuItems";
import Header from "../components/layout/header/Header";
import { MenuProvider } from "../context/MenuContext";

const Menu = () => {
  return (
    <MenuProvider>
      <Header color="transparent" />
      <MenuHeroSection />
      <CategoryFilter />
      <MenuItems />
    </MenuProvider>
  );
};

export default Menu;
