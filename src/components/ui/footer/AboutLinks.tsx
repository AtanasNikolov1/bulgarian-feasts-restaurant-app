const aboutLinks = [
  { text: "Our Story" },
  { text: "Our Chefs" },
  { text: "Awards & Recognitions" },
  { text: "Charity Partnerships" },
];

const AboutLinks = () => {
  return (
    <div className="1/6">
      <h3 className="mb-4 text-xl font-medium">About</h3>
      <ul>
        {aboutLinks.map((link) => (
          <li className="mb-2 transition-colors duration-200 hover:cursor-pointer hover:text-customOrange">
            <p>{link.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutLinks;
