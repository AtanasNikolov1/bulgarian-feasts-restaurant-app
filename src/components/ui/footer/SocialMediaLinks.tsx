const socialMediaLinks = [
  { icon: "facebook" },
  { icon: "twitter" },
  { icon: "instagram" },
  { icon: "tiktok" },
];

const SocialMediaLinks = () => {
  return (
    <div className="mb-4 flex gap-6 text-3xl">
      {socialMediaLinks.map((link) => (
        <p
          key={link.icon}
          className="transition-colors duration-200 hover:cursor-pointer hover:text-customOrange"
        >
          <i className={`fa-brands fa-${link.icon}`}></i>
        </p>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
