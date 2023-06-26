import { useState } from "react";

export default function Menu({ onClick }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button className="group relative" onClick={toggleMenu}>
      <div
        className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 ring-primary ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4 ${
          isOpen ? "" : "animate-reverse"
        }`}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <span
            className={`h-0.5 w-10 origin-left transform bg-light transition-all duration-300 ${
              isOpen ? "" : "group-focus:rotate-[42deg]"
            }`}
          />
          <span
            className={`h-0.5 w-10 transform rounded bg-light transition-all duration-300 ${
              isOpen ? "" : "group-focus:-translate-x-10"
            }`}
          />
          <span
            className={`h-0.5 w-7 origin-left transform bg-light transition-all duration-300 ${
              isOpen ? "" : "group-focus:-rotate-[42deg]"
            }`}
          />
        </div>
      </div>
    </button>
  );
}
