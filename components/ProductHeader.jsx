import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductHeader = ({ name, manufacturer, price }) => {
  return (
    <div className="product-header">
      <h1 className="text-zinc-600 font-bold text-xl">{name}</h1>
      <p className="text-sm text-zinc-500">{manufacturer}</p>
      <ul className="list-none flex justify-start items-center pt-0 ">
        <li className="">
          <AiFillStar className="text-xs transition-all duration-500 my-1 mr-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="">
          <AiFillStar className="text-xs transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="">
          <AiFillStar className="text-xs transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="">
          <AiOutlineStar className="text-xs transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700" />
          <AiFillStar className="hidden text-amber-600" />
        </li>
        <li className="">
          <AiOutlineStar className="text-xs transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700 " />
        </li>
      </ul>
      <p className="price text-lg font-semibold text-zinc-600 mt-4">
        BD 220.00
      </p>
    </div>
  );
};

export default ProductHeader;
