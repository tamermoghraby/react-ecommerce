import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable, MdProductionQuantityLimits } from "react-icons/md";

const ProductCard = ({
  product: {
    mainimage,
    product_id,
    name,
    options,
    price,
    manufacturer,
    stock_map,
  },
}) => {
  // const { handleMainImageChange } = useStateContext();
  // const handleCardClick = () => {
  //   handleMainImageChange(mainimage);
  // };

  return (
    <div
      className="category-content  overflow-hidden lg:w-1/6 md:w-1/4 sm:w-1/3 min-w-[200px] m-5 box-border rounded-xl cursor-pointer transition-all duration-500 bg-[#f2f2f2] transform
      hover:-translate-y-4 hover:opacity-80 "
      // onClick={handleCardClick}
    >
      <Link href={`/product/${product_id}`}>
        <div className="aspect-square ">
          <img
            src={mainimage}
            alt=""
            className="w-full h-full object-cover p-1 mx-auto block rounded-xl"
          />
        </div>
        <div className="product-desc mx-0 p-2">
          <h3 className=" text-sm text-zinc-600 font-bold pt-3 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-zinc-500">{manufacturer}</p>
          <ul className="list-none flex justify-start items-center pt-0 ">
            <li className="pt-1">
              <AiFillStar className="text-sm transition-all duration-500 my-1 mr-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
            </li>
            <li className="pt-1">
              <AiFillStar className="text-sm transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
            </li>
            <li className="pt-1">
              <AiFillStar className="text-sm transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
            </li>
            <li className="pt-1">
              <AiOutlineStar className="text-sm transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700" />
              <AiFillStar className="hidden text-amber-600" />
            </li>
            <li className="pt-1">
              <AiOutlineStar className="text-sm transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700 " />
            </li>
          </ul>
          {/* <p className="text-center text-neutral-500 p-2 ">{description}</p> */}
          <div className="quantity-and-price pt-1 flex justify-between items-center">
            <div className="flex gap-1 items-center quantity">
              {stock_map?.__total ? (
                <MdProductionQuantityLimits className="text-zinc-500" />
              ) : (
                <CgUnavailable className="text-zinc-500" />
              )}
              <p
                className={`text-xs text-zinc-500 ${
                  stock_map?.__total ? "" : "line-through"
                }`}
              >
                {stock_map?.__total
                  ? `${stock_map.__total} available`
                  : "Out of stock"}
              </p>
            </div>

            <p className="text-sm font-semibold text-zinc-600">USD 123.00</p>
          </div>

          {/* <button
          className="text-center  text-xl text-white w-full p-3 border-0 outline-none cursor-pointer mt-1 rounded-br-3xl rounded-bl-3xl 
         bg-violet-700"
        >
          BUY NOW
        </button> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
