const contacts = [
  { text: "Main Street, Plovdiv, Bulgaria", icon: "location-dot" },
  { text: "bgfeasts@gmail.com", icon: "envelope" },
];

const Contacts = () => {
  return (
    <>
      <h3 className="mb-4 text-xl font-medium">Contact Us</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.icon} className="mb-4 flex">
            <i className={`fa-solid fa-${contact.icon} mr-4 text-2xl`}></i>
            <p className="self-center">{contact.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
