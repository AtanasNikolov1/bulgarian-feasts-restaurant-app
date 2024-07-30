import { Link } from "react-router-dom";
import heroWallpaper from "../../../assets/images/hero-wallpaper.jpg";

function HomeHeroSection() {
  return (
    <section
      className="flex h-screen w-screen items-center justify-end bg-cover"
      style={{ backgroundImage: `url(${heroWallpaper})` }}
    >
      <div className="mr-20 mt-32 w-2/6 text-snow">
        <h1 className="mb-9 font-headings text-9xl">
          <span className="text-customOrange">Enjoy Our</span> Delicious{" "}
          <span className="text-customOrange">Meals</span>
        </h1>
        <p className="mb-9 text-xl">
          Experience the finest culinary delights and an unforgettable dining
          atmosphere. Join us for a feast of flavors and a celebration of food.
        </p>
        <Link
          to="/menu"
          className="block max-w-fit rounded-xl border-2 border-customOrange bg-customOrange px-4 py-6 text-xl font-bold transition-colors duration-300 hover:cursor-pointer hover:bg-snow hover:text-customOrange"
        >
          Explore Our Menu
        </Link>
      </div>
    </section>
  );
}

export default HomeHeroSection;
