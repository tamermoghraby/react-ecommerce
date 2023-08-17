import { useStateContext } from "@/context/StateContext";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantitySelection = () => {
  const {
    incQty,
    decQty,
    qty,
    handleQtyChange,
    selectedStorage,
    selectedColor,
    selectedPaymentMethod,
    selectedInstallmentPlan,
  } = useStateContext();
  return (
    <div
      className={`mt-5 transition-all duration-500 ease-in-out ${
        !selectedStorage ||
        !selectedColor ||
        !selectedPaymentMethod ||
        (selectedInstallmentPlan[1] === null &&
          selectedPaymentMethod === "Installments")
          ? "opacity-0 max-h-0 pointer-events-none translate-x-32"
          : "opacity-100 -translate-y-2 "
      }  `}
    >
      <div className="flex items-center gap-2">
        <p className=" text-zinc-600 text-base font-bold ">Quantity:</p>
        <div
          className="flex w-fit py-1 px-2 mt-1 gap-1 border  rounded-lg items-center cursor-pointer transition-all duration-500
         border-red-500 shadow-md shadow-zinc-400 "
        >
          <span
            className="minus text-sm font-bold text-green-600 cursor-pointer transition-all duration-500 hover:scale-125 "
            onClick={decQty}
          >
            <AiOutlineMinus />
          </span>
          <input
            type="number"
            className="quantity-input text-zinc-600 text-base font-bold w-6 text-center outline-none"
            value={qty}
            onChange={handleQtyChange}
            // min="1"
          />
          <span
            className="plus text-sm font-bold text-red-600 cursor-pointer transition-all duration-500 hover:scale-125"
            onClick={incQty}
          >
            <AiOutlinePlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelection;
