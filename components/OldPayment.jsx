import { useStateContext } from "@/context/StateContext";
import React from "react";
import InstallmentPlan from "./InstallmentPlan";

const OldPayment = () => {
  const {
    selectedPaymentMethod,
    selectedStorage,
    selectedColor,
    handlePaymentMethodSelection,
    showInstallmentPlans,
    handleInstallmentPlanSelection,
    selectedInstallmentPlan,
  } = useStateContext();

  return (
    <div
      className={`payment-options border border-zinc-300 rounded-xl p-4 mt-5 xl:min-w-[380px]
    transition-all  duration-500 ease-in-out
    ${
      !selectedStorage ||
      !selectedColor ||
      selectedPaymentMethod === "Full Price" ||
      (selectedPaymentMethod === "Installments" &&
        selectedInstallmentPlan[1] !== null)
        ? "opacity-0 max-h-0 pointer-events-none translate-y-28 "
        : ""
    }`}
    >
      <div
        className={`payment-option 
         `}
      >
        <p className="text-zinc-600 text-base font-bold">Device Payment:</p>
        <div className="flex gap-10 items-center mt-4">
          <label
            className={`cursor-pointer flex flex-col text-sm transition-all  duration-500 py-1 px-5 border rounded-lg hover:border-red-500 hover:scale-110 ${
              selectedPaymentMethod === "Full Price"
                ? "text-zinc-600 font-bold border-red-500 scale-110 shadow-md shadow-zinc-400"
                : "text-zinc-600  font-semibold border-zinc-400"
            } `}
            onClick={() => handlePaymentMethodSelection("Full Price")}
          >
            <span className="w-max">FULL PRICE</span>
            <span className="text-xs text-zinc-500 text-center font-normal">
              BD 220.00
            </span>
          </label>
          <label
            className={`cursor-pointer py-2 px-4  text-sm transition-all duration-500 border rounded-lg hover:border-red-500 
                  hover:scale-110 ${
                    selectedPaymentMethod === "Installments"
                      ? "text-zinc-600  font-bold border-red-500  shadow-md shadow-zinc-400 scale-x-105 scale-y-110"
                      : "text-zinc-600 font-semibold border-zinc-400"
                  }  `}
            onClick={() => handlePaymentMethodSelection("Installments")}
          >
            <span>PAY IN INSTALLMENTS</span>
          </label>
        </div>
        <div
          className={`flex flex-col gap-2 mt-4 transition-all duration-500 ease-in-out ${
            showInstallmentPlans
              ? "opacity-100 "
              : "opacity-0 max-h-0 pointer-events-none translate-y-28"
          } `}
        >
          <InstallmentPlan
            installmentPlan={[23.8, 18]}
            handleSelection={() => handleInstallmentPlanSelection(23.8, 18)}
          />
          <InstallmentPlan
            installmentPlan={[17.2, 24]}
            handleSelection={() => handleInstallmentPlanSelection(17.2, 24)}
          />
        </div>
      </div>
    </div>
  );
};

export default OldPayment;
