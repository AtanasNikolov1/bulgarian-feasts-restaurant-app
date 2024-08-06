import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../services/cartService";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const Item = ({ item }) => {
  const [popup, setPopup] = useState({ visible: false, name: "", quantity: 0 });
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      return navigate("/login");
    }
    addToCart(item.id, 1, item.price);
    setPopup({ visible: true, name: item.name, quantity: 1 });
  };

  useEffect(() => {
    if (popup.visible) {
      const timer = setTimeout(() => {
        setPopup({ visible: false, name: "", quantity: 0 });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [popup.visible]);

  return (
    <>
      {popup.visible && (
        <div className="fixed bottom-2 right-2 z-50 m-4 rounded-lg bg-green-500 p-4 text-lg text-white shadow-lg">
          Successfully added {popup.quantity} {popup.name} to your cart!
        </div>
      )}
      <div className="relative overflow-hidden rounded-lg border-2 border-customOrange bg-white shadow-md">
        <p className="absolute left-2 top-2 ml-2 rounded-3xl bg-white px-2 py-0.5 text-xl font-bold text-yellow-500">
          <i className="fa-solid fa-star"></i>
          {item.rating}
        </p>

        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-48 w-full object-cover"
        />
        <div className="relative p-4 text-center">
          <h3 className="mb-1 min-h-14 text-xl font-bold text-lightBlack">
            {item.name}
          </h3>
          <p className="mb-1 font-semibold capitalize text-customOrange">
            {item.category}
          </p>

          <p className="absolute -right-0 -top-5 bg-customOrange px-4 py-0.5 text-xl font-semibold">
            BGN {item.price.toFixed(2)}
          </p>

          <div className="mt-3 flex justify-between gap-2 lg:flex-col xl:flex-row">
            <Link
              to={`/menu/${item.id}`}
              className="rounded-xl bg-customOrange px-6 py-2 text-snow transition-colors duration-300 hover:bg-black"
            >
              More Info <i className="fa-solid fa-magnifying-glass pl-0.5"></i>
            </Link>
            <button
              onClick={handleAddToCart}
              className="rounded-xl bg-customOrange px-6 py-2 text-snow transition-colors duration-300 hover:bg-black"
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
