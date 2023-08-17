import React from "react";
import InstallmentPlan from "./InstallmentPlan";
import { useStateContext } from "@/context/StateContext";
import RecommendedPlan from "./RecommendedPlan";
import SimPlan from "./SimPlan";
import SelectedNumber from "./SelectedNumber";
import { TiTick } from "react-icons/ti";

const DevicePlan = () => {
  const {
    selectedPaymentMethod,
    selectedStorage,
    selectedColor,
    handlePaymentMethodSelection,
    selectedSimPlan,
    handleSimPlanSelection,
    showInstallmentPlans,
    handleInstallmentPlanSelection,
    selectedInstallmentPlan,
  } = useStateContext();

  return (
    <div
      className={`device-plan rounded-xl
            transition-all  duration-500 ease-in-out ${
              selectedSimPlan[1] ? "" : ""
            }
            `}
    >
      <div className={`plan-options `}>
        <p
          className={`text-zinc-600 text-base font-bold transform transition-all duration-500 ease-in-out ${
            selectedSimPlan[1] !== null ? "" : ""
          } `}
        >
          Device Plan:
        </p>
        <div
          className={`selected-plan space-y-4 mt-4 transform transition-all duration-500 ease-in-out  ${
            selectedSimPlan[1] === null
              ? "opacity-0 max-h-0 translate-y-12 pointer-events-none"
              : "opcacity-100 "
          }`}
        >
          <SimPlan
            planName={selectedSimPlan[1]}
            planPrice={"9.00"}
            description={"16GB data + 500 local minutes."}
            isRecommended={true}
            isEditable={true}
          />
          <SelectedNumber isEditable={true} />
        </div>
        <div
          className={`flex items-center justify-between
              ${
                !selectedSimPlan[1]
                  ? "opacity-100"
                  : "opacity-0 max-h-0 pointer-events-none translate-y-28"
              }
              `}
        >
          <label
            className={`new-mobile-plan relative cursor-pointer flex flex-col text-sm transition-all  duration-500 py-3 px-4 border rounded-lg
                 hover:border-red-500 hover:shadow-md hover:shadow-zinc-400 hover:scale-105 ${
                   selectedSimPlan[0] === "New"
                     ? "text-zinc-600 font-bold border-red-500  shadow-md shadow-zinc-400"
                     : "text-zinc-600  font-semibold border-zinc-400"
                 } `}
            onClick={() => handleSimPlanSelection("New", null)}
          >
            <span className="">NEW MOBILE PLAN</span>
            <div
              className={`transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg 
                    absolute px-1 top-0 right-0 rounded-tr-md translate-x-[1px] -translate-y-[1px]  ${
                      selectedSimPlan[0] === "New" ? "" : "opacity-0 "
                    }
              `}
            >
              <TiTick className="text-xs" />
            </div>
          </label>
          <label
            className={`existing-plan cursor-pointer py-3 px-4  text-sm transition-all duration-500 border rounded-lg
                 hover:border-red-500 hover:shadow-md hover:shadow-zinc-400 hover:scale-105 ${
                   selectedSimPlan[0] === "Existing"
                     ? "text-zinc-600  font-bold border-red-500  shadow-md shadow-zinc-400 scale-x-105"
                     : "text-zinc-600 font-semibold border-zinc-400"
                 }  `}
          >
            <span>EXISTING PLAN</span>
            <div
              className={`transition-all duration-500 ease-in-out text-center text-white bg-red-500 rounded-bl-lg 
                    absolute px-1 top-0 right-0 rounded-tr-md translate-x-[1px] -translate-y-[1px]  ${
                      selectedSimPlan[0] === "Existing" ? "" : "opacity-0 "
                    }
              `}
            >
              <TiTick className="text-xs" />
            </div>
          </label>
        </div>

        <div
          className={`available-plans space-y-2 mt-4 transition-all duration-500 ease-in-out
              ${
                selectedSimPlan[0] === "New" && selectedSimPlan[1] == null
                  ? "opacity-100 "
                  : "opacity-0 max-h-0 pointer-events-none translate-y-28"
              } `}
          //   ${ showInstallmentPlans ? "opacity-100 " : "opacity-0 max-h-0 pointer-events-none translate-y-28"}
        >
          <SimPlan
            planName={"Postpaid 9"}
            planPrice={"9.00"}
            description={"16GB data + 500 local minutes."}
            isRecommended={true}
          />
          <SimPlan
            planName={"Postpaid 10"}
            planPrice={"11.00"}
            description={"20GB data + 650 local minutes."}
            isRecommended={false}
          />
          <SimPlan
            planName={"Postpaid 11"}
            planPrice={"15.00"}
            description={" 35GB data + 800 local minutes."}
            isRecommended={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DevicePlan;
