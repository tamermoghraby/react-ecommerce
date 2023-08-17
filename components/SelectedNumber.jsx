import React from "react";
import { BiEditAlt } from "react-icons/bi";

const SelectedNumber = () => {
  return (
    <div className="selected-number-container">
      <label
        className={`flex flex-col relative  py-1 px-2 border rounded-lg font-bold border-zinc-400
          `}
      >
        <span className=" text-zinc-500 text-xs font-medium">
          SELECTED NUMBER
        </span>
        <span className="text-sm text-zinc-600 font-bold">33235118</span>
        <div
          className={`cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500
           rounded-bl-lg absolute top-0 right-0 rounded-tr-lg py-[2px] translate-x-[1px] -translate-y-[1px] px-3 
            `}
        >
          <BiEditAlt className="text-xs" />
        </div>
      </label>
    </div>
  );
};

export default SelectedNumber;
