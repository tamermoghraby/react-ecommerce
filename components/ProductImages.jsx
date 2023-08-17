import React from "react";

const ProductImages = ({
  mainImageSrc,
  produtImages,
  index,
  handleSmallImageHover,
}) => {
  return (
    <div className="h-fit min-w-[260px]">
      <div className="aspect-square transition ease-in duration-500">
        <img
          className="product-detail-image transition duration-700 ease-in w-full h-full object-cover p-1 mx-auto block rounded-xl"
          src={mainImageSrc}
        />
      </div>
      <div className="small-images-container">
        {produtImages?.map((item, i) => (
          <img
            key={i}
            src={item}
            className={`small-image transition-all duration-500 ${
              i === index ? "opacity-100 scale-125" : "opacity-60"
            }`}
            onMouseEnter={() => handleSmallImageHover(i)}
            onClick={() => {
              handleSmallImageHover(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
