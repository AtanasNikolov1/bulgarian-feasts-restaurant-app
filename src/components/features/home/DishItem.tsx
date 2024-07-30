import { Link } from "react-router-dom";

function DishItem({ item }) {
  return (
    <div className="relative m-1 w-72 overflow-hidden rounded-2xl">
      <p className="text-bold absolute -left-3 -top-0.5 rounded-3xl bg-[#FF8C00] px-5 py-2 uppercase text-white">
        Top seller
      </p>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="h-48 w-full object-cover"
      />
      <div className="bg-white py-4">
        <div className="flex items-center justify-between pb-5">
          <h3 className="basis-2/3 text-center text-xl font-normal">
            {item.name}
          </h3>
          <p className="basis-1/3 text-lg text-gray-600">
            BGN {item.price.toFixed(2)}
          </p>
        </div>
        <Link
          to={`/menu/${item.id}`}
          className="mx-auto block w-fit rounded-3xl border-2 border-customOrange bg-customOrange px-5 py-2 text-lg text-snow transition-colors duration-300 hover:bg-snow hover:text-customOrange"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default DishItem;
