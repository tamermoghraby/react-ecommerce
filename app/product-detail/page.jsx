import React from "react";
import Category from "@/components/Category";
import ProductDetail from "@/components/ProductDetail";
import { response } from "@/data/shopdata";
const CategoryPage = () => {
  const product = response.devices[1];
  return <ProductDetail product={product} />;
};

export default CategoryPage;
