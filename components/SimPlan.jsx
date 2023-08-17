import { useStateContext } from "@/context/StateContext";
import React from "react";
import { BiEditAlt } from "react-icons/bi";

const SimPlan = ({
  planName,
  planPrice,
  description,
  isRecommended,
  isEditable,
}) => {
  const { selectedSimPlan, handleSimPlanSelection } = useStateContext();
  return (
    <div className="plan-info  rounded-b-lg">
      <label
        className={`flex relative flex-col py-2 pl-5 pr-2 transition-all duration-500 ease-in-out
         border rounded-lg font-bold  hover:border-red-500 hover:scale-105 hover:shadow-md hover:shadow-zinc-400  cursor-pointer ${
           selectedSimPlan[1] === planName
             ? "text-zinc-600 font-bold border border-red-500 shadow-md shadow-zinc-400"
             : "border-zinc-400"
         } `}
        onClick={
          selectedSimPlan[1] === null
            ? () => handleSimPlanSelection(selectedSimPlan[0], planName)
            : () => handleSimPlanSelection(null, null)
        }
      >
        <span className=" text-zinc-700 text-base font-bold">{planName}</span>
        <div className="plan-details flex items-center justify-between">
          <span className="text-xs text-zinc-600 font-medium">
            {description}
          </span>
          <span>
            BD {planPrice}
            <span className="text-xs text-zinc-400 font-medium">/month</span>
          </span>
        </div>

        {isRecommended ? (
          <div className="flex gap-2 text-white bg-violet-700 rounded-bl-lg rounded-tr-md  pl-2 absolute top-0 right-0 ">
            <p className="text-xs font-extralight">RECOMMENDED</p>
            <div
              className={`cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg  rounded-tr-md py-[2px] px-3 
            ${isEditable ? "" : "opacity-0"}`}
            >
              <BiEditAlt className="text-xs" />
            </div>
          </div>
        ) : (
          ""
        )}
      </label>
    </div>
  );
};

export default SimPlan;
