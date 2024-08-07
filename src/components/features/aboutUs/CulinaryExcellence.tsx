import kitchenChef from "../../../assets/images/kitchenChef.jpg";
import restaurantInterior from "../../../assets/images/restaurantInterior.jpg";
import bartender from "../../../assets/images/bartender.jpg";
import table from "../../../assets/images/table.jpg";

const CulinaryExcellence = () => {
  return (
    <div className="container mx-auto mb-32 mt-44 p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={kitchenChef}
            alt="Chef"
            className="h-full w-full rounded-lg object-cover"
          />
          <img
            src={restaurantInterior}
            alt="Restaurant Interior"
            className="h-full w-full rounded-lg object-cover"
          />
          <img
            src={bartender}
            alt="Bartender"
            className="h-full w-full rounded-lg object-cover"
          />
          <img
            src={table}
            alt="Table"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="ml-6 flex flex-col justify-center">
          <h2 className="mb-4 pb-6 font-headings text-5xl font-bold text-customOrange">
            Our Story of Traditional Bulgarian Culinary Excellence at
            BulgarianFeasts
          </h2>
          <p className="mb-4 text-lg">
            BulgarianFeasts is dedicated to bringing the rich flavors and
            traditions of Bulgarian cuisine to your table. With a deep respect
            for our culinary heritage, we serve authentic Bulgarian dishes
            crafted from family recipes passed down through generations.
          </p>
          <p className="mb-4 text-lg">
            With over 10 years of experience, we take pride in providing a warm,
            welcoming atmosphere where you can enjoy the best of Bulgaria's
            culinary delights. From savory meats to fresh vegetables and
            delectable pastries, every meal at BulgarianFeasts is a celebration
            of our culture.
          </p>
          <div className="mt-10 flex justify-evenly gap-4">
            <div className="basis-1/3 rounded-3xl bg-customOrange px-6 py-5 text-center text-snow">
              <div className="text-2xl font-bold">10k+</div>
              <div>Happy Customers</div>
              <div>Enjoying our traditional flavors</div>
            </div>
            <div className="basis-1/3 rounded-3xl bg-customOrange px-6 py-5 text-center text-snow">
              <div className="text-2xl font-bold">5+</div>
              <div>Locations</div>
              <div>Serving delicious Bulgarian cuisine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryExcellence;
