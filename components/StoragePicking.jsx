import { useStateContext } from "@/context/StateContext";
import React, { useEffect, useState } from "react";
import StorageLabel from "./StorageLabel";

const StoragePicking = () => {
  const { selectedStorage, handleStorageSelection, storageOptionsVisible } =
    useStateContext();
  const [isHidden, setIsHidden] = useState(false);
  const makeObjectHidden = () => {
    setTimeout(() => {}, 300);
  };

  return (
    <>
      <div
        className={`flex gap-4 items-center justify-between transition-all duration-500 ease-in-out ${
          selectedStorage
            ? `opacity-0 max-h-0 pointer-events-none translate-x-24 `
            : "opacity-100"
        } `}
      >
        <p className="text-zinc-500 text-sm font-medium">Storage:</p>
        <StorageLabel storage={"64"} />
        <StorageLabel storage={"128"} />
        <StorageLabel storage={"256"} />
      </div>
    </>
  );
};

export default StoragePicking;
