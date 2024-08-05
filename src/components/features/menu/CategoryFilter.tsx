import { useMenu } from "../../../context/MenuContext";
import DropdownMenu from "./DropdownMenu";

const categories = [
  { text: "All", value: null },
  { text: "Appetizers", value: "appetizers" },
  { text: "Soups", value: "soups" },
  { text: "Main Dishes", value: "main dishes" },
  { text: "Grilled Dishes", value: "grilled dishes" },
  { text: "Fish and Seafood", value: "fish and seafood" },
  { text: "Vegetarian Dishes", value: "vegetarian" },
  { text: "Side Dishes", value: "side dishes" },
  { text: "Desserts", value: "desserts" },
  { text: "Drinks", value: "drinks" },
];
const prices = [
  { text: "None", value: null },
  { text: "Low to High", value: "asc" },
  { text: "High to Low", value: "desc" },
];
const ratings = [
  { text: "None", value: null },
  { text: "5 ⭐⭐⭐⭐⭐", value: 5 },
  { text: "4⭐⭐⭐⭐", value: 4 },
  { text: "3⭐⭐⭐", value: 3 },
  { text: "2⭐⭐", value: 2 },
  { text: "1⭐", value: 1 },
];

const CategoryFilter = () => {
  const { setCategory, setPrice, setRating, category, price, rating } =
    useMenu();

  const reset = () => {
    setCategory(null);
    setPrice(null);
    setRating(null);
  };

  return (
    <div className="flex items-center justify-center gap-6 py-8">
      <DropdownMenu
        defaultOption={"Filter by Category"}
        setOption={setCategory}
        options={categories}
        filter={category}
      />
      <DropdownMenu
        defaultOption={"Filter by Price"}
        setOption={setPrice}
        options={prices}
        filter={price}
      />
      <DropdownMenu
        defaultOption={"Filter by Rating"}
        setOption={setRating}
        options={ratings}
        filter={rating}
      />
      <button
        className="bg-customOrange px-4 py-1.5 text-xl text-snow"
        onClick={reset}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default CategoryFilter;
