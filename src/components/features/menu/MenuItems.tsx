import { useMenu } from "../../../context/MenuContext";
import ErrorMessage from "../../common/errorMessage/ErrorMessage";
import Loader from "../../common/loader/Loader";
import Item from "./Item";

const MenuItems = () => {
  const { menuItems, loading, error } = useMenu();

  if (loading || error) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }

  if (menuItems.length === 0) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="flex justify-center text-4xl text-customOrange">
          We couldn’t find any items that fit your selection. Try changing your
          filters to see more options.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-6 grid min-h-[40vh] grid-cols-1 gap-10 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menuItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;
