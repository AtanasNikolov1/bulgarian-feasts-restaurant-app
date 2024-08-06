import CartForm from "./CartForm";

// src/components/OrderSummary.js
const OrderSummary = ({
  subtotal,
  total,
  createOrder,
  user,
  shippingAddress,
  setShippingAddress,
}) => {
  return (
    <div className="h-max rounded-md bg-gray-100 p-4">
      <h3 className="border-b border-gray-300 pb-2 text-lg font-bold text-gray-800 max-sm:text-base">
        Order Summary
      </h3>
      <CartForm
        shippingAddress={shippingAddress}
        setShippingAddress={setShippingAddress}
      />
      <ul className="mt-6 space-y-3 text-gray-800">
        <li className="flex flex-wrap gap-4 text-sm">
          Subtotal{" "}
          <span className="ml-auto font-bold">BGN {subtotal.toFixed(2)}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Shipping <span className="ml-auto font-bold">BGN 2.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Tax <span className="ml-auto font-bold">BGN 4.00</span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">BGN {total.toFixed(2)}</span>
        </li>
      </ul>
      <div className="mt-6 space-y-3">
        <button
          type="button"
          className="w-full rounded-md bg-gray-800 px-4 py-2.5 text-sm font-semibold tracking-wide text-white hover:bg-gray-900"
          onClick={createOrder}
        >
          Checkout
        </button>
        <button
          type="button"
          className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 text-sm font-semibold tracking-wide text-gray-800"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
