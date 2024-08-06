const CartForm = ({ shippingAddress, setShippingAddress }) => {
  return (
    <form className="mt-6">
      <div>
        <h3 className="mb-4 text-base font-semibold text-gray-800">
          Enter Details
        </h3>
        <div className="space-y-3">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Shipping address"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              className="w-full rounded-md border-b bg-white px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-800"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartForm;
