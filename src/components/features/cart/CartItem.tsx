const CartItem = ({ item, handleDelete, handleQuantityChange }) => {
  return (
    <div key={item.id}>
      <div className="grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 flex items-start gap-4">
          <div className="h-28 w-28 shrink-0 rounded-md bg-gray-100 p-2 max-sm:h-24 max-sm:w-24">
            <img
              src={item.menuItemId.imageUrl}
              className="h-full w-full object-contain"
              alt={item.menuItemId.name}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base text-lg font-bold text-gray-800">
              {item.menuItemId.name}
            </h3>
            <button
              type="button"
              className="mt-12 flex shrink-0 items-center gap-1 text-sm font-semibold text-red-500"
              onClick={() => handleDelete(item.id)}
            >
              <i className="fa-solid fa-trash"></i>
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h4 className="text-lg font-bold text-gray-800 max-sm:text-base">
            BGN {(item.quantity * item.menuItemId.price).toFixed(2)}
          </h4>
          <div className="mt-6 flex items-center rounded-md border border-gray-300 bg-transparent text-xs text-gray-800 outline-none">
            <button
              type="button"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="flex items-center rounded-l-md bg-slate-600 px-3 py-2 text-white"
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <p className="mx-3 w-8 text-center font-bold">{item.quantity}</p>
            <button
              type="button"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="flex items-center rounded-r-md bg-slate-600 px-3 py-2 text-white"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-2 border-gray-300" />
    </div>
  );
};

export default CartItem;
