import { useStateContext } from "@/context/StateContext";
import React from "react";

const StorageLabel = ({ storage }) => {
  const { handleStorageSelection } = useStateContext();
  return (
    <label
      className={`cursor-pointer px-3 py-1 text-sm transition-all  duration-700
          border rounded-lg  text-zinc-600 font-semibold border-zinc-400
            hover:border-red-500 hover:scale-110 hover:font-bold hover:shadow-md hover:shadow-zinc-400   `}
      onClick={() => handleStorageSelection(storage)}
    >
      <span>{storage}GB</span>
      <input type="radio" className="hidden" name="size" />
    </label>
  );
};

export default StorageLabel;
