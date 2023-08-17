import React from "react";
import InstallmentPlan from "./InstallmentPlan";
import { useStateContext } from "@/context/StateContext";
import RecommendedPlan from "./RecommendedPlan";
import SimPlan from "./SimPlan";
import SelectedNumber from "./SelectedNumber";
import { TiTick } from "react-icons/ti";
import SelectedPlan from "./SelectedPlan";

const OldDevicePlan = () => {
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
      className={`device-plan-container border border-zinc-300 rounded-xl 
      max-w-[400px] min-w-[380px] overflow-hidden
        transition-all  duration-500 ease-in-out ${selectedSimPlan[1] ? "" : ""}
        ${
          (selectedPaymentMethod && selectedPaymentMethod !== "Full Price") ||
          (selectedPaymentMethod === "Installments" &&
            selectedInstallmentPlan[1] !== null)
            ? "p-4 mt-4  "
            : "opacity-0 max-h-0 pointer-events-none translate-x-32"
        }`}
    >
      <div className={`plan-options divide-y-2 divide-zinc-200`}>
        <div className="pb-6 min-h-[55px]">
          <p
            className={`text-zinc-600 flex  text-base font-bold transform transition-all duration-500 ease-in-out ${
              selectedSimPlan[1] !== null ? "" : ""
            } `}
          >
            Plan Options:
          </p>
        </div>
        <div>
          <p
            className={`text-zinc-600 flex pt-6 text-base font-bold transform transition-all duration-500 ease-in-out ${
              selectedSimPlan[1] !== null ? "" : ""
            } `}
          >
            Device Plan:
          </p>
          <SelectedPlan
            planName={selectedSimPlan[1]}
            planPrice={"9.00"}
            description={"16GB data + 500 local minutes."}
            isRecommended={true}
            isEditable={true}
          />
          <div>
            <div
              className={`new-existing flex  items-center justify-between
          ${
            !selectedSimPlan[1]
              ? "opacity-100 pt-6 gap-10"
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
                <span className="w-max">NEW MOBILE PLAN</span>
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
                 ? "text-zinc-600  font-bold border-red-500  shadow-md shadow-zinc-400 scale-x-105 scale-y-110"
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
              className={`available-plans flex flex-col transition-all duration-500 ease-in-out
          ${
            selectedSimPlan[0] === "New" && selectedSimPlan[1] == null
              ? "opacity-100 gap-4 mt-6"
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
      </div>
    </div>
  );
};

export default OldDevicePlan;
