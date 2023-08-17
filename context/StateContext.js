"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedInstallmentPlan, setSelectedInstallmentPlan] = useState([
    null,
    null,
  ]);
  const [selectedSimPlan, setSelectedSimPlan] = useState([null, null]);
  const [showInstallmentPlans, setShowInstallmentPlans] = useState(false);
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [storageOptionsVisible, setStorageOptionsVisible] = useState(true);
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false);

  const handleMainImageChange = (mainimage) => {
    setMainImageSrc(mainimage);
  };

  // const handleStorageSelection = (storage) => {
  //   setSelectedStorage(storage);
  // };

  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
    setSelectedColor(null);
    setSelectedPaymentMethod(null);
    setSelectedInstallmentPlan([null, null]);
    handleSimPlanSelection(null, null);

    setShowInstallmentPlans(false);
  };

  // const handleColorSelection = (color) => {
  //   setSelectedColor(color);
  // };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setSelectedPaymentMethod(null);
    setSelectedInstallmentPlan([null, null]);
    setShowInstallmentPlans(false);
    setSelectedSimPlan[[null, null]];
  };

  const handlePaymentMethodSelection = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setSelectedSimPlan[[null, null]];
    if (selectedPaymentMethod !== "Installments")
      setSelectedInstallmentPlan([null, null]);
    setShowInstallmentPlans(paymentMethod === "Installments");
  };

  const handleInstallmentPlanSelection = (amount, months) => {
    setSelectedInstallmentPlan([amount, months]);
    if (amount === null && months === null) handleSimPlanSelection(null, null);
  };

  const handleSimPlanSelection = (plan, name) => {
    setSelectedSimPlan([plan, name]);
  };

  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const handleQtyChange = (event) => {
    const value = event.target.value.trim();
    if (value === "") {
      setQty(1);
    } else {
      const parsedValue = parseInt(value);
      setQty(isNaN(parsedValue) ? 1 : parsedValue);
    }
  };
  const [index, setIndex] = useState(0);

  const handleIndexChange = (i) => {
    setIndex(i);
  };

  const bgColorVariants = {
    blue: "bg-blue-600",
    zinc: "bg-zinc-600",
    green: "bg-green-600",
  };
  const ringColorVariants = {
    blue: "ring-blue-600",
    zinc: "ring-zinc-600",
    green: "ring-green-600",
  };
  const borderColorVariants = {
    blue: "border-blue-600",
    zinc: "border-zinc-600",
    green: "border-green-600",
  };
  const textColorVariants = {
    blue: "text-blue-600",
    zinc: "text-zinc-600",
    green: "text-green-600",
  };

  return (
    <Context.Provider
      value={{
        selectedStorage,
        setSelectedStorage,
        selectedColor,
        selectedPaymentMethod,
        selectedInstallmentPlan,
        selectedSimPlan,
        handleStorageSelection,
        handleColorSelection,
        handlePaymentMethodSelection,
        handleSimPlanSelection,
        qty,
        incQty,
        decQty,
        handleQtyChange,
        index,
        handleIndexChange,
        showInstallmentPlans,
        handleInstallmentPlanSelection,
        mainImageSrc,
        setMainImageSrc,
        handleMainImageChange,
        storageOptionsVisible,
        colorOptionsVisible,
        bgColorVariants,
        ringColorVariants,
        borderColorVariants,
        textColorVariants,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
