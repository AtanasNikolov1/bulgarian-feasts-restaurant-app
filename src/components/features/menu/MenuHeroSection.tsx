import menuWallpaper from "../../../assets/images/menuWallpaper.jpg";

const MenuHeroSection = () => {
  return (
    <div
      className="bg flex min-h-[50vh] flex-col items-center justify-center gap-5 bg-purple-400 bg-cover pt-10 font-headings"
      style={{ backgroundImage: `url(${menuWallpaper})` }}
    >
      <h1 className="text-7xl font-semibold text-customOrange">
        Delicious Choices Await
      </h1>
      <p className="text-3xl text-snow">
        From Appetizers to Desserts, Find Your Favorite
      </p>
    </div>
  );
};

export default MenuHeroSection;
