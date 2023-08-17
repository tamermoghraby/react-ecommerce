import React from "react";
import StoragePicking from "./StoragePicking";
import ColorSelection from "./ColorSelection";
import QuantitySelection from "./QuantitySelection";
import { useStateContext } from "@/context/StateContext";
import InstallmentPlan from "./InstallmentPlan";
import DevicePayment from "./DevicePayment";
import { BiEditAlt } from "react-icons/bi";
import DevicePlan from "./DevicePlan";

const DeviceOptions = () => {
  const {
    selectedStorage,
    handleStorageSelection,
    selectedColor,
    handleColorSelection,
    handlePaymentMethodSelection,
    selectedInstallmentPlan,
    selectedPaymentMethod,
    bgColorVariants,
  } = useStateContext();
  const lowerCaseColor = selectedColor?.toLowerCase();
  const borderColorVariants = {
    blue: "border-blue-600",
    zinc: "border-zinc-600",
    green: "border-green-600",
  };
  return (
    <div
      className={`device-options overflow-hidden divide-y-2 divide-zinc-200 border border-zinc-300 rounded-xl p-4 mt-4
      max-w-[420px] min-w-[380px]
      ${selectedColor && selectedPaymentMethod === "Installments" ? "" : ""} ${
        selectedInstallmentPlan[0] !== null ? " " : ""
      }  `}
    >
      <div className="options flex pb-6 min-h-[55px] relative gap-6 items-center transition-all duration-500 ease-in-out">
        <p className="text-zinc-600 text-base font-bold">Options:</p>
        <div
          className={`flex  gap-6 selected-options transition-all duration-500 ease-in-out 
        ${selectedStorage ? "rounded-lg w-fit" : ""}`}
        >
          <label
            className={`selected-storage cursor-pointer px-3 py-1 text-sm font-bold transition-all duration-500 ease-in-out border
           rounded-lg border-red-500 text-zinc-600  shadow-md shadow-zinc-400
           hover:scale-105 ${
             selectedStorage === null
               ? "opacity-0 max-h-0 max-w-0 translate-x-32 pointer-events-none"
               : "opacity-100"
           } `}
            onClick={() => handleStorageSelection(null)}
          >
            <span>{selectedStorage}GB</span>
            <input type="radio" className="hidden" name="size" />
          </label>
          <label
            className={`selected-color cursor-pointer border shadow-md shadow-zinc-400 ${
              borderColorVariants[lowerCaseColor]
            } rounded-lg px-3 py-[2px]  flex items-center justify-center hover:scale-105 transition-all duration-500  ${
              selectedColor === null
                ? "opacity-0 translate-x-32 pointer-events-none"
                : "opacity-100"
            }`}
            onClick={() => handleColorSelection(null)}
          >
            <span
              className={`w-3 h-3 ring-2 ${bgColorVariants[lowerCaseColor]} rounded-full flex items-center justify-center`}
            >
              <span
                className={`w-2 h-2 ${
                  bgColorVariants[lowerCaseColor]
                } rounded-full block hover:opacity-100 transition-all duration-500 ${
                  selectedColor === { selectedColor } ? "" : "opacity-0"
                }`}
              ></span>
            </span>
            <span className={`text-zinc-600 text-base font-semibold ml-2 `}>
              {selectedColor}
            </span>
            <input type="radio" className="hidden" name="size" />
          </label>
          <div
            className={`edit-icon cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg absolute top-0 right-0 rounded-tr-lg py-[2px] px-3 
            ${
              selectedStorage ? "" : "opacity-0 max-w-0 max-h-0 translate-x-8"
            }`}
            onClick={() => handleStorageSelection(null)}
          >
            <BiEditAlt className="text-xs" />
          </div>
        </div>
      </div>
      <div className="pickings pt-6">
        <StoragePicking />
        <ColorSelection />
        <div
          className={`payment-and-plan divide-y-2 divide-zinc-200  ${
            !selectedStorage || !selectedColor
              ? // selectedPaymentMethod === "Full Price" ||
                // (selectedPaymentMethod === "Installments" &&
                //   selectedInstallmentPlan[1] !== null)
                "opacity-0 max-h-0 pointer-events-none translate-y-20"
              : ""
          }`}
        >
          <div
            className={`device-payment-container  transition-all duration-500 ease-in-out ${
              !selectedStorage || !selectedColor
                ? // selectedPaymentMethod === "Full Price" ||
                  // (selectedPaymentMethod === "Installments" &&
                  //   selectedInstallmentPlan[1] !== null)
                  "opacity-0 max-h-0 pointer-events-none translate-y-20"
                : ""
            }`}
          >
            <DevicePayment />
          </div>
          <div
            className={`device-plan-container hidden pt-8 transition-all duration-500 ease-in-out ${
              selectedPaymentMethod === "Full Price" ||
              (selectedPaymentMethod === "Installments" &&
                selectedInstallmentPlan[1] !== null)
                ? ""
                : "opacity-0 max-h-0 pointer-events-none translate-x-32"
            }`}
          >
            {/* <DevicePlan /> */}
          </div>
        </div>
      </div>
      {/* <div
        className={`transition-all flex gap-4 items-center duration-500 ease-in-out ${
          selectedPaymentMethod === "Full Price" ||
          (selectedPaymentMethod === "Installments" &&
            selectedInstallmentPlan[0] != null)
            ? "opacity-100 -translate-y-8"
            : "opacity-0 translate-y-48 "
        }`}
      >
         <p className="text-zinc-600 text-base font-bold">Payment:</p>
        {selectedPaymentMethod === "Installments" ? (
          <InstallmentPlan
            installmentPlan={selectedInstallmentPlan}
            handleSelection={() => handlePaymentMethodSelection(null)}
            isEditable={true}
          />
        ) : (
          <label
            className={`cursor-pointer relative flex gap-2 items-center text-sm transition-all duration-500 py-2 px-5 pr-12  border rounded-lg hover:border-red-500 hover:scale-105 ${
              selectedPaymentMethod === "Full Price"
                ? "text-zinc-600 font-bold border-red-500  shadow-md shadow-zinc-400"
                : "text-zinc-600  font-semibold border-zinc-400"
            } `}
            onClick={() => handlePaymentMethodSelection(null)}
          >
            <span className="w-max">FULL PRICE</span>
            <span className="text-xs text-zinc-500 font-semibold">
              BD 220.00
            </span>
            <div
              className={`cursor-pointer transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg absolute top-0 right-0 rounded-tr-md py-[2px] px-3
            `}
            >
              <BiEditAlt
                className="text-xs"
                onClick={() => handleStorageSelection(null)}
              />
            </div>
          </label>
        )} */}
    </div>
    /* <label
        className={`cursor-pointer flex flex-col text-sm transition-all  duration-500 py-1 px-5 border rounded-lg hover:border-red-500 hover:scale-105 ${
          selectedInstallmentPlan === 18
            ? "text-zinc-600 font-bold border-red-500 scale-105 shadow-md shadow-zinc-400"
            : "text-zinc-600 font-semibold border-zinc-400"
        } `}
        onClick={() => handleInstallmentPlanSelection(18)}
      >
        <span>
          BD 23.80{" "}
          <span className="text-xs text-zinc-400 font-medium">/month</span>
        </span>
        <span className="text-xs text-zinc-500 font-semibold">
          18 MONTH DEVICE INSTALLMENT
        </span>
      </label> 
    </div>*/
  );
};

export default DeviceOptions;
