import { useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import CartForm from "./CartForm";

const CartContainer = () => {
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);

  useEffect(() => {
    const loadItems = async () => {
      const { data, error } = await supabase
        .from("cart")
        .select("*,menuItemId(*)")
        .eq("userId", user.id)
        .order("id");

      if (error) {
        console.log(error.message);
      }

      console.log(data);
      setItems(data);
    };

    loadItems();
  }, [user.id]);

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = items.reduce(
        (sum, item) => sum + item.quantity * item.menuItemId.price,
        0,
      );
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [items]);

  useEffect(() => {
    const shipping = 2.0; // Example shipping cost
    const tax = 4.0; // Example tax
    setTotal(subtotal + shipping + tax);
  }, [subtotal]);

  const handleDelete = (id) => {
    const deleteItem = async () => {
      const { error } = await supabase.from("cart").delete().eq("id", id);

      if (error) {
        return console.log(error.message);
      }

      setItems((items) => items.filter((item) => item.id !== id));
      console.log("Successfully deleted");
    };

    deleteItem();
  };

  const handleQuantityChange = async (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity below 1

    const { error } = await supabase
      .from("cart")
      .update({ quantity: newQuantity })
      .eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }

    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const createOrder = async () => {
    if (!shippingAddress) return;

    // Step 1: Create an order in the orders table
    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          userId: user.id,
          totalPrice: total,
          status: "successful",
          shippingAddress: shippingAddress,
          paymentMethod: "card",
        },
      ])
      .select();

    if (orderError) {
      console.log(orderError.message);
      return;
    }

    const orderId = orderData[0].id;

    // Step 2: Fetch cart items for the user
    const { data: cartItems, error: cartError } = await supabase
      .from("cart")
      .select("id, menuItemId, quantity, price")
      .eq("userId", user.id);

    if (cartError) {
      console.log(cartError.message);
      return;
    }

    // Step 3: Insert cart items into orderItems table
    const orderItems = cartItems.map((item) => ({
      orderId: orderId,
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      price: item.price * item.quantity,
    }));

    const { error: orderItemsError } = await supabase
      .from("orderItems")
      .insert(orderItems);

    if (orderItemsError) {
      console.log(orderItemsError.message);
      return;
    }

    // Step 4: Delete cart items for the user
    const cartItemIds = cartItems.map((item) => item.id);

    const { error: deleteCartError } = await supabase
      .from("cart")
      .delete()
      .in("id", cartItemIds);

    if (deleteCartError) {
      console.log(deleteCartError.message);
      return;
    }

    console.log(
      "Order created and cart items moved to order items successfully.",
    );

    // Show a confirmation window before redirecting
    if (
      window.confirm(
        "Order created successfully. Do you want to continue shopping?",
      )
    ) {
      return navigate("/menu");
    }
    return navigate("/menu");
  };

  return (
    <div className="mx-auto mb-32 mt-48 max-w-7xl bg-white px-10 py-8 font-sans max-md:max-w-xl">
      <h1 className="text-center font-headings text-5xl font-bold text-customOrange">
        Shopping Cart
      </h1>
      {items.length === 0 ? (
        <h2 className="my-16 text-center text-4xl font-bold text-gray-600">
          Cart is empty
        </h2>
      ) : (
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
          <OrderSummary
            subtotal={subtotal}
            total={total}
            createOrder={createOrder}
            user={user}
            shippingAddress={shippingAddress}
            setShippingAddress={setShippingAddress}
          />
        </div>
      )}
    </div>
  );
};

export default CartContainer;
