import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";

const ColorLabel = ({ color }) => {
  const { selectedColor, handleColorSelection } = useStateContext();
  const [lowerCaseColor, setLowerCaseColor] = useState(color.toLowerCase());
  const [isHovered, setIsHovered] = useState(false);
  const bgColorVariants = {
    blue: "bg-blue-600",
    zinc: "bg-zinc-600",
    green: "bg-green-600",
  };
  const ringColorVariants = {
    blue: "ring-blue-600",
    zinc: "ring-zinc-600",
    green: "ring-green-600",
  };
  const textColorVariants = {
    blue: "text-blue-600",
    zinc: "text-zinc-600",
    green: "text-green-600",
  };

  return (
    <label
      className={`cursor-pointer flex items-center justify-center  transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleColorSelection(color)}
    >
      <p
        className={`mr-2 text-sm font-bold tracking-wider transition-all duration-700 ease-in-out ${
          isHovered ? "" : "translate-x-4 opacity-0"
        } ${textColorVariants[lowerCaseColor]} `}
      >
        {color}
      </p>
      <span
        className={`w-5 h-5 ring-2 ${
          ringColorVariants[lowerCaseColor]
        } rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300
        ${selectedColor === color ? "scale-125" : ""}`}
      >
        <span
          className={`w-4 h-4 ${bgColorVariants[lowerCaseColor]} ${
            isHovered || selectedColor === color ? "opacity-100" : "opacity-0"
          } rounded-full block transition-opacity duration-500`}
        ></span>
      </span>
      <input type="radio" className="hidden" name="size" />
    </label>
  );
};

export default ColorLabel;
