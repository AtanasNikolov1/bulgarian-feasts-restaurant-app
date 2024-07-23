import Testimonial from "./Testimonial";

function Testimonials() {
  const persons = [
    {
      name: "Sarah Johnson",
      imageUrl:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "The dining experience was exceptional. The food was delicious, and the ambiance was perfect. The service was attentive and friendly. I'll definitely be coming back!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      imageUrl:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "The restaurant had a cozy atmosphere, and the staff were very welcoming. The dishes were well-prepared, and the flavors were amazing. Highly recommend the seafood platter!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      imageUrl:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "Great place for a family dinner. The menu has a lot of variety, and everything we ordered was delicious. The kids loved the desserts. Will visit again!",
      rating: 4,
    },
  ];

  return (
    <section className="mx-auto w-full overflow-hidden px-5 py-10 text-center font-headings font-semibold text-stormGray">
      <h2 className="text-5xl">What Our Customers Are Saying</h2>
      <div className="mx-auto mb-12 mt-6 h-1 w-52 bg-customOrange"></div>

      <div className="flex flex-wrap justify-center gap-14">
        {persons.map((person) => (
          <Testimonial key={person.name} personData={person} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
