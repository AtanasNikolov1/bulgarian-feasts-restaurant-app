import CommentsSection from "../components/features/details/CommentsSection";
import ItemDetails from "../components/features/details/ItemDetails";
import Header from "../components/layout/header/Header";

const MenuItemDetails = () => {
  return (
    <div className="mb-32 mt-44">
      <Header color="snow" />
      <ItemDetails />
      <CommentsSection />
    </div>
  );
};

export default MenuItemDetails;
