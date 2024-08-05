import { useEffect, useRef, useState } from "react";

const DropdownMenu = ({ defaultOption, setOption, options, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (value) => {
    setIsOpen(!isOpen);
    setOption(value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex w-48 items-center justify-between rounded bg-customOrange px-4 py-2 capitalize text-snow"
      >
        {filter ? filter.text : defaultOption}
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <button
              onClick={() => handleClick(option)}
              key={option}
              className="block w-full rounded-t-lg px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
