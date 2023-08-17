import { useStateContext } from "@/context/StateContext";
import React from "react";
import InstallmentPlan from "./InstallmentPlan";
import { TiTick, TiTickOutline } from "react-icons/ti";
import { BiCheckboxChecked } from "react-icons/bi";

const DevicePayment = () => {
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
      className={`payment-options rounded-xl  
    transition-all  duration-500 ease-in-out
    `}
    >
      <div className={`payment-option`}>
        <p className="text-zinc-600 text-base font-bold">Payment:</p>
        <div className="payment-type flex justify-between items-center mt-6">
          <label
            className={`cursor-pointer text-zinc-600 relative flex flex-col text-sm transition-all  duration-500 py-1 px-8
             border rounded-lg hover:border-red-500 hover:scale-105 hover:shadow-md hover:shadow-zinc-400 ${
               selectedPaymentMethod === "Full Price"
                 ? "font-bold border-red-500 shadow-md shadow-zinc-400"
                 : " font-semibold border-zinc-400"
             } `}
            onClick={() => handlePaymentMethodSelection("Full Price")}
          >
            <span className="w-max">FULL PRICE</span>
            <span className="text-xs text-zinc-500 text-center font-normal">
              BD 220.00
            </span>
            <div
              className={`transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg 
                absolute px-1 top-0 right-0 rounded-tr-md translate-x-[1px] -translate-y-[1px]  ${
                  selectedPaymentMethod === "Full Price" ? "" : "opacity-0 "
                }
          `}
            >
              <TiTick className="text-xs" />
            </div>
          </label>
          <label
            className={`cursor-pointer text-zinc-600 relative py-3 px-4  text-sm transition-all duration-500 border rounded-lg
             hover:border-red-500 hover:scale-105 hover:shadow-md hover:shadow-zinc-400
                   ${
                     selectedPaymentMethod === "Installments"
                       ? " scale-100  font-bold border-red-500  shadow-md shadow-zinc-400 "
                       : " font-semibold border-zinc-400"
                   }  `}
            onClick={() => handlePaymentMethodSelection("Installments")}
          >
            <span>PAY IN INSTALLMENTS</span>
            <div
              className={`transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg 
                absolute px-1 top-0 right-0 rounded-tr-md translate-x-[1px] -translate-y-[1px]  ${
                  selectedPaymentMethod === "Installments" ? "" : "opacity-0 "
                }
          `}
            >
              <TiTick className="text-xs" />
            </div>
          </label>
        </div>
        <div
          className={` flex flex-col transition-all duration-500 ease-in-out ${
            showInstallmentPlans
              ? "opacity-100 mt-6"
              : "opacity-0 max-h-0 pointer-events-none translate-y-28"
          } `}
        >
          <div
            className={`available-plans space-y-4 transition-all duration-500 ease-in-out 
            ${
              selectedInstallmentPlan[0] === null
                ? "opacity-100"
                : "opacity-0 max-h-0 pointer-events-none translate-y-10"
            }`}
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
          <div
            className={`selected-plan transition-all duration-500 ${
              selectedInstallmentPlan[0] !== null
                ? "opacity-100"
                : "opacity-0 max-h-0 pointer-events-none translate-y-10"
            }`}
          >
            {/* InstallmentPlan component */}
            {selectedInstallmentPlan[0] !== null && (
              <InstallmentPlan
                installmentPlan={[
                  selectedInstallmentPlan[0],
                  selectedInstallmentPlan[1],
                ]}
                handleSelection={() =>
                  handleInstallmentPlanSelection(null, null)
                }
                isEditable={true}
              />
            )}
          </div>
          {/* {selectedInstallmentPlan[0] === 17.2 && (
            <InstallmentPlan
              installmentPlan={[17.2, 24]}
              handleSelection={() => handleInstallmentPlanSelection(null, null)}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DevicePayment;
