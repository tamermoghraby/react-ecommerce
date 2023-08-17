import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";
import ColorLabel from "./ColorLabel";

const ColorSelection = () => {
  const { selectedColor, handleColorSelection, selectedStorage } =
    useStateContext();
  // const [selectedColor, setSelectedColor] = useState("Green");

  // const handleColorSelection = (color) => {
  //   setSelectedColor(color);
  // };

  return (
    <div
      className={`color-selection-container transition-all duration-500 ease-in-out ${
        selectedColor || !selectedStorage
          ? `opacity-0 max-h-0 pointer-events-none translate-x-32 `
          : "opacity-100"
      } `}
    >
      <div className="flex gap-12 items-center transition-all duration-500 ease-in">
        <p className="text-zinc-500 text-sm font-medium">Color: </p>
        <div className="flex gap-8">
          <ColorLabel color="Blue" />
          <ColorLabel color="Zinc" />
          <ColorLabel color="Green" />
        </div>
      </div>
      {/* <div className="flex items-center bg- gap-8 mt-2 transition-all duration-500 ease-in"></div> */}
    </div>
  );
};

export default ColorSelection;
