"use client";
import React, { useState, useEffect } from "react";
import { response } from "@/data/shopdata";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import StoragePicking from "@/components/StoragePicking";
import ProgressBar from "@/components/ProgressBar";
import { StateContext, useStateContext } from "@/context/StateContext";
import ColorSelection from "@/components/ColorSelection";
import QuantitySelection from "@/components/QuantitySelection";
import DeviceOptions from "@/components/DeviceOptions";
import ProductHeader from "@/components/ProductHeader";
import ProductImages from "@/components/ProductImages";
import DevicePayment from "@/components/DevicePayment";
import ProductCard from "@/components/ProductCard";
import OldDevicePlan from "@/components/OldDevicePlan";
import DevicePlan from "@/components/DevicePlan";

const ProductDetails = ({ product, products }) => {
  const { mainimage, name, price, manufacturer, retail_costinfo } = product;
  const {
    selectedStorage,
    setSelectedStorage,
    selectedColor,
    handleStorageSelection,
    selectedPaymentMethod,
    handlePaymentMethodSelection,
    index,
    handleIndexChange,
    selectedInstallmentPlan,
    selectedSimPlan,
    showInstallmentPlans,
    handleInstallmentPlanSelection,
    mainImageSrc,
    setMainImageSrc,
  } = useStateContext();

  // const [mainImageSrc, setMainImageSrc] = useState(product.mainimage);
  const handleSmallImageHover = (i) => {
    handleIndexChange(i);
    setTimeout(() => {
      setMainImageSrc(product.images[i]);
    }, 300);
  };

  useEffect(() => {
    setMainImageSrc(mainimage);
    setSelectedStorage(null);
  }, [mainimage]);

  const [isHovered, setIsHovered] = useState(false);

  //   useEffect(() => {
  //     // When the index changes, update the main image src with a delay for a smooth transition effect
  //     const timer = setTimeout(() => {
  //       setMainImageSrc(product.images[index]);
  //     }, 300); // Adjust the delay to control the transition speed

  //     // Clear the timer on component unmount to avoid memory leaks
  //     return () => clearTimeout(timer);
  //   }, [index, product.images]);

  return (
    <div className="transition-all duration-500">
      <div className="product-detail-container xl:justify-normal justify-center items-start">
        <ProductImages
          mainImageSrc={mainImageSrc}
          produtImages={product.images}
          index={index}
          handleSmallImageHover={handleSmallImageHover}
        />
        <div>
          <ProductHeader name={name} manufacturer={manufacturer} />
          <div className="xl:flex xl:gap-6 xl:justify-between ">
            <DeviceOptions />
            {/* <DevicePayment /> */}
            <OldDevicePlan />
          </div>
          <div
            className={`action-buttons flex items-center justify-between mt-10 transition-all duration-500 ease-in-out
              ${
                !selectedStorage ||
                !selectedColor ||
                !selectedPaymentMethod ||
                (selectedPaymentMethod === "Installments" &&
                  selectedInstallmentPlan[0] === null) ||
                !selectedSimPlan[1]
                  ? "opacity-0 translate-x-32 pointer-events-none"
                  : "opacity-100"
              }
            `}
          >
            <div className="add-to-cart-container flex items-center">
              <button
                type="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="add-to-cart rounded-md text-zinc-500 text-base font-bold py-2 border border-red-500 w-40 transition-all duration-500
              hover:scale-110 hover:text-white hover:bg-red-500"
              >
                Add to Cart
              </button>
              <div
                className={`flex flex-col items-center justify-between transition-all duration-500 ease-in-out ${
                  isHovered ? "translate-x-4" : "opacity-0"
                }`}
              >
                <span className={`text-zinc-600 font-extrabold text-xl `}>
                  BD{" "}
                  {selectedPaymentMethod === "Installments"
                    ? selectedInstallmentPlan[0]
                    : "220.00"}
                </span>

                <span
                  className={`text-sm text-zinc-400 font-medium 
                ${selectedPaymentMethod === "Installments" ? "" : "hidden"}`}
                >
                  /month
                </span>
              </div>
            </div>
            <button
              type="button"
              className="buy-now hidden rounded-md text-white text-base py-2 border bg-red-500 w-40 transition-all duration-500
              hover:scale-110 hover:text-white hover:bg-red-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h1 className=" text-zinc-600 font-bold text-xl text-center my-4">
          Related Products
        </h1>
        <div className="marquee">
          <div className="maylike-products-container track">
            {response.devices.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  // Get the list of devices from the shopdata.js file
  const devices = response.devices;

  // Generate an array of paths using the product_ids from devices
  const paths = devices.map((device) => ({
    params: { product_id: device.product_id },
  }));

  return {
    paths,
    fallback: false, // Set fallback to false so that 404 is returned for undefined paths
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps = async ({ params }) => {
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  //const res = await fetch(`https://.../products/${product_id}`);
  const product = response.devices.find(
    (device) => device.product_id === params.product_id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
