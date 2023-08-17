import { useStateContext } from "@/context/StateContext";
import React from "react";
import SimPlan from "./SimPlan";
import SelectedNumber from "./SelectedNumber";
import { BiEditAlt } from "react-icons/bi";

const SelectedPlan = ({
  planName,
  planPrice,
  description,
  isRecommended,
  isEditable,
}) => {
  const { selectedSimPlan, handleSimPlanSelection } = useStateContext();
  return (
    <div
      className={`selected-plan flex flex-col  transform transition-all duration-500 ease-in-out  ${
        selectedSimPlan[1] === null
          ? "opacity-0 max-h-0 translate-y-12 pointer-events-none"
          : "opcacity-100 pt-6 space-y-6 "
      }`}
    >
      {/* <p
        className={`text-zinc-600 flex text-base font-bold transform transition-all duration-500 ease-in-out ${
          selectedSimPlan[1] !== null ? "" : ""
        } `}
      >
        Device Plan:
      </p> */}
      <div className="plan-info relative  rounded-b-lg">
        <label
          className={`flex relative  divide-y-2 divide-zinc-200 flex-col py-2 pl-5 pr-2 transition-all duration-500 ease-in-out
         border rounded-lg font-bold  hover:border-red-500 hover:shadow-md hover:shadow-zinc-400  ${
           selectedSimPlan[1] === planName
             ? "text-zinc-600 font-bold border border-red-500 shadow-md shadow-zinc-400"
             : "border-zinc-400"
         } `}
        >
          <div className="plan-details pb-3">
            <span className=" text-zinc-700 text-base font-bold">
              {planName}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-600 font-medium">
                {description}
              </span>
              <span>
                BD {planPrice}
                <span className="text-xs text-zinc-400 font-medium">
                  /month
                </span>
              </span>
            </div>
          </div>

          <div className="selected-number-container pt-3">
            <label
              className={`flex flex-col relative  rounded-lg font-bold
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
        </label>
        {isRecommended ? (
          <div className="flex gap-2 text-white bg-violet-700 rounded-bl-lg rounded-tr-md pl-2 absolute top-0 right-0 ">
            <p className="text-xs font-extralight">RECOMMENDED</p>
            <div
              className={`cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg  rounded-tr-md py-[2px] px-3 
            ${isEditable ? "" : "opacity-0"}`}
              onClick={
                selectedSimPlan[1] === null
                  ? () => handleSimPlanSelection(selectedSimPlan[0], planName)
                  : () => handleSimPlanSelection(null, null)
              }
            >
              <BiEditAlt className="text-xs" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SelectedPlan;
