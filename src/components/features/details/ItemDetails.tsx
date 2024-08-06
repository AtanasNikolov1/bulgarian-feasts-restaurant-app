import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../../config/supabaseClient";
import { addToCart } from "../../../services/cartService";
import { useAuth } from "../../../context/AuthContext";

const ItemDetails = () => {
  const [popup, setPopup] = useState({ visible: false, name: "", quantity: 0 });
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const { data, error } = await supabase
        .from("menu")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        return console.log("THERE IS A PROBLE");
      }
      console.log(data);

      setItem(data);
    };
    fetchDetails();
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      return navigate("/login");
    }
    addToCart(item.id, quantity);
    setPopup({ visible: true, name: item.name, quantity: quantity });
  };

  const decreasingQuantity = (quantity) => {
    if (quantity <= 1) return;

    setQuantity((q) => q - 1);
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
    <div className="mx-auto max-w-6xl p-5">
      {popup.visible && (
        <div className="fixed bottom-2 right-2 z-50 m-4 rounded-lg bg-green-500 p-4 text-lg text-white shadow-lg">
          Successfully added {popup.quantity} {popup.name} to your cart!
        </div>
      )}
      <div className="flex gap-20">
        <div className="basis-1/3">
          <img
            src={item.imageUrl}
            alt="Delicious Food"
            className="object-fit h-80 w-96 rounded-lg"
          />
        </div>
        <div className="basis-2/3">
          <h1 className="text-5xl font-bold text-customOrange">{item.name}</h1>
          <p className="mt-5 w-fit rounded-3xl bg-customOrange px-5 py-2 text-xl font-bold text-snow">
            <i className="fa-solid fa-star"></i>
            {item.rating}
          </p>
          <div className="mt-5">
            <span className="text-3xl font-semibold text-lightBlack">
              BGN {item.price ? item.price.toFixed(2) : "Loading..."}
            </span>
          </div>
          <p className="mt-5 text-lg capitalize text-lightBlack">
            <strong className="pr-1.5">Category:</strong>
            {item.category}
          </p>
          <p className="mt-2 text-lg text-lightBlack">{item.description}</p>
          <div className="mt-5 flex items-center justify-start gap-36">
            <div>
              <button
                className="rounded-l-lg bg-lightBlack px-3.5 py-2.5 text-snow"
                onClick={() => decreasingQuantity(quantity)}
              >
                -
              </button>
              <span className="border-b border-t border-slate-200 bg-slate-200 px-5 py-3">
                {quantity}
              </span>
              <button
                className="rounded-r-lg bg-lightBlack px-3.5 py-2.5 text-snow"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="ml-5 rounded-lg border-2 border-customOrange bg-customOrange px-6 py-3 text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-customOrange"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
