import Link from "next/link";
import React from "react";

const Product = ({
  product: { mainimage, product_id, name, options, price },
}) => {
  return (
    <div className="flex-auto w-64">
      <Link href={`/product/${product_id}`}>
        <div className="product-card">
          <img
            src={mainimage}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">95$</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
