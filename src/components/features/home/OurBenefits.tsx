import deliveryIcon from "../../../assets/images/deliveryIcon.png";
import clockIcon from "../../../assets/images/clockIcon.png";
import chefIcon from "../../../assets/images/chefIcon.png";
import cateringIcon from "../../../assets/images/cateringIcon.png";

const benefits = [
  { icon: deliveryIcon, text: "Fast and Reliable Delivery" },
  { icon: clockIcon, text: "Our Restaurant is Open Around the Clock" },
  { icon: chefIcon, text: "Highly Skilled Chefs" },
  { icon: cateringIcon, text: "We Have The Freshest Product" },
];

function OurBenefits() {
  return (
    <section className="mx-auto my-16 w-11/12 rounded-[2.5rem] bg-orangeGradient text-white">
      <h3 className="py-12 text-center font-headings text-5xl font-semibold">
        Why Choose Us?
      </h3>
      <ul className="flex justify-center gap-20 pb-10 text-lg font-medium">
        {benefits.map((benefit) => (
          <li className="basis-1/6" key={benefit.text}>
            <img
              src={benefit.icon}
              alt={benefit.text}
              className="mx-auto mb-4 h-20"
            />
            <p className="mx-auto w-4/6 text-center">{benefit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurBenefits;
