import { useStateContext } from "@/context/StateContext";
import React from "react";
import { BiEditAlt, BiSolidMessageSquareEdit } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

const RecommendedPlan = (installmentPlan, handleSelection) => {
  const { handleInstallmentPlanSelection, selectedInstallmentPlan } =
    useStateContext();
  const amount = installmentPlan[0];
  const months = installmentPlan[1];
  return (
    <div className="sim-plan-container">
      <div>
        <div className="plan-header relative flex pl-2 items-center justify-between bg-violet-700 rounded-t-lg">
          <p className="w-full p-1 px-2 text-white text-sm font-medium ">
            RECOMMENDED PLAN
          </p>
          <div className="cursor-pointer text-white bg-red-500 rounded-bl-lg rounded-tr-lg p-1 absolute top-0 right-0 ">
            <BiEditAlt className="text-xs" />
          </div>
        </div>
        <div className="plan-info  border border-red-500 border-t-0 rounded-b-lg">
          <label
            className={`flex flex-col  py-1 px-5 border rounded-b-lg font-bold  ${
              selectedInstallmentPlan[1] === installmentPlan[1]
                ? "text-zinc-600 font-bold border-red-500 shadow-md shadow-zinc-400"
                : ""
            } `}
          >
            <span className=" text-zinc-700 text-base font-bold">
              Postpaid 9 {amount}
            </span>
            <span className="text-xs text-zinc-600 font-semibold">
              16GB data + 500 local minutes.
            </span>
          </label>

          <label
            className={`flex flex-col m-4 py-1 px-2 border rounded-lg font-bold border-zinc-400
              `}
          >
            <span className=" text-zinc-500 text-xs font-medium">
              SELECTED NUMBER {amount}
            </span>
            <span className="text-sm text-zinc-600 font-bold">33235118</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPlan;
