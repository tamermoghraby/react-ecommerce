import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CategoryCard = ({ image, name, price, description }) => {
  return (
    <div
      className="category-content overflow-hidden lg:w-40 md:w-1/6 sm:w-1/4 mb-5 box-border float-left text-center rounded-2xl cursor-pointer transition-all duration-500 bg-[#f2f2f2] transform
    hover:-translate-y-2 hover:opacity-80 "
    >
      <img
        src={image}
        alt=""
        className="w-auto h-auto text-center mx-auto block"
      />
      <h3 className="text-center text-zinc-600 font-bold text-sm py-2">
        {name}
      </h3>
      {/* <p className="text-center text-xs text-zinc-500 p-2 line-clamp-3">
        {description}
      </p> */}
      {/* <h6 className="text-xl text-center text-blue-950 m-0 ">${price}</h6> */}
      {/* <ul className="list-none flex justify-center items-center pt-0 ">
        <li className="pt-1">
          <AiFillStar className="text-2xl transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="pt-1">
          <AiFillStar className="text-2xl transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="pt-1">
          <AiFillStar className="text-2xl transition-all duration-500 m-1 text-amber-600 hover:transform hover:scale-125  hover:duration-700" />
        </li>
        <li className="pt-1">
          <AiOutlineStar className="text-2xl transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700" />
          <AiFillStar className="hidden text-amber-600" />
        </li>
        <li className="pt-1">
          <AiOutlineStar className="text-2xl transition-all duration-500 m-1 hover:transform hover:scale-125  hover:duration-700 " />
        </li>
      </ul> */}
      {/* <button
        className="text-center text-sm text-white w-full p-2 border-0 outline-none cursor-pointer mt-1 rounded-br-2xl rounded-bl-2xl 
       bg-indigo-700"
      >
        See All
      </button> */}
    </div>
  );
};

export default CategoryCard;
