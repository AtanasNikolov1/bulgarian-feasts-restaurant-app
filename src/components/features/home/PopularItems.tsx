import { useEffect, useState } from "react";
import DishItem from "./DishItem";
import { fetchPopularItems } from "../../../services/menuService";
import Loader from "../../common/loader/Loader";
import ErrorMessage from "../../common/errorMessage/ErrorMessage";

function PopularItems() {
  const [popularItems, setPopularItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularItems = async () => {
      setLoading(true);
      const { data, error } = await fetchPopularItems();
      if (error) {
        setError(error);
      } else {
        setPopularItems(data);
      }
      setLoading(false);
    };

    getPopularItems();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="py-16">
      <div className="mx-auto px-16">
        <h2 className="mb-12 text-center font-headings text-5xl font-semibold text-lightBlack">
          Most Popular Items
        </h2>
        <div className="flex flex-wrap justify-between">
          {popularItems.map((item) => (
            <DishItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularItems;
