function Testimonial({ personData }) {
  const solidStars = Array.from(
    { length: personData.rating },
    (_, index) => index,
  );
  const regularStars = Array.from(
    { length: 5 - personData.rating },
    (_, index) => index,
  );

  return (
    <div className="basis-1/4 bg-white p-7">
      <img
        src={personData.imageUrl}
        alt={personData.name}
        className="mx-auto h-32 w-32 rounded-[50%] object-cover"
      />
      <div className="my-5 text-xl uppercase">{personData.name}</div>
      <div className="mb-5 text-customOrange">
        {solidStars.map((_, index) => (
          <i className="fa-solid fa-star" key={`solid-${index}`}></i>
        ))}
        {regularStars.map((_, index) => (
          <i className="fa-regular fa-star" key={`regular-${index}`}></i>
        ))}
      </div>
      <p>{personData.review}</p>
    </div>
  );
}

export default Testimonial;
