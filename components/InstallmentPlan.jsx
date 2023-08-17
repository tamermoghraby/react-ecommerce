import { useStateContext } from "@/context/StateContext";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const InstallmentPlan = ({ installmentPlan, handleSelection, isEditable }) => {
  const {
    handleInstallmentPlanSelection,
    selectedInstallmentPlan,
    selectedPaymentMethod,
    showInstallmentPlans,
  } = useStateContext();
  const amount = installmentPlan[0];
  const months = installmentPlan[1];
  return (
    <div className="installment-plan-container">
      <label
        className={`cursor-pointer relative flex flex-col hover:shadow-md hover:shadow-zinc-400 text-sm transition-all  duration-500 py-2 px-5 ${
          isEditable ? "pr-12" : ""
        } border rounded-lg hover:border-red-500 hover:scale-105  ${
          selectedInstallmentPlan[1] === installmentPlan[1]
            ? "text-zinc-600 font-bold border-red-500  shadow-md shadow-zinc-400"
            : "text-zinc-600 font-semibold border-zinc-400"
        } `}
        onClick={handleSelection}
      >
        <span>
          BD {amount}
          <span className="text-xs text-zinc-400 font-medium">/month</span>
        </span>
        <span className="text-xs text-zinc-500 font-semibold">
          {months} MONTH DEVICE INSTALLMENT
        </span>
        <div
          className={`transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg 
                absolute px-1 top-0 right-0 rounded-tr-md translate-x-[1px] -translate-y-[1px]  ${
                  selectedInstallmentPlan[1] === installmentPlan[1]
                    ? ""
                    : "opacity-0 "
                }
          `}
        >
          <TiTick className="text-xs" />
        </div>
        <div
          className={`cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg absolute top-0 right-0 rounded-tr-md py-[2px] px-3 
            ${isEditable ? "" : "opacity-0"}`}
        >
          <BiEditAlt className="text-xs" />
        </div>
      </label>
    </div>
  );
};

export default InstallmentPlan;
