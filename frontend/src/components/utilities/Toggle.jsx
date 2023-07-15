import { useState } from "react";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className="relative flex w-max cursor-pointer select-none items-center"
      id="toggle"
    >
      <input
        type="checkbox"
        className="h-10 w-36 cursor-pointer appearance-none rounded-full outline-none transition-colors"
        checked={isChecked}
        onChange={handleToggle}
      />

      <span
        className={`absolute left-4 z-10 text-xs font-medium uppercase ${
          isChecked ? "text-dark" : "text-light"
        }`}
      >
        Skills
      </span>
      <span
        className={`absolute right-4 z-10 text-xs font-medium uppercase ${
          isChecked ? "text-light" : "text-dark"
        }`}
      >
        Tools
      </span>
      <span className="absolute left-1 right-1 h-8 w-[50%] transform rounded-full bg-primary transition-transform" />
    </label>
  );
}
