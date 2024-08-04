const termsPrivacyLinks = [
  { text: "Trust & Safety" },
  { text: "Terms of Service" },
  { text: "Privacy Policy" },
];

const TermsPrivacyLinks = () => {
  return (
    <div className="1/6">
      <h3 className="mb-4 text-xl font-medium">Terms & Privacy</h3>
      <ul>
        {termsPrivacyLinks.map((link) => (
          <li
            key={link.text}
            className="mb-2 transition-colors duration-200 hover:cursor-pointer hover:text-customOrange"
          >
            <p>{link.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsPrivacyLinks;
