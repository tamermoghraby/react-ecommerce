"use client";
import React, { useEffect, useState } from "react";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Footer,
  Layout,
} from "@/components";
import { createClient } from "next-sanity";
import banner from "@/sanity/schemas/banner";
import Category from "@/components/Category";
import ProductCard from "@/components/ProductCard";
import { response } from "@/data/shopdata";

const Home = () => {
  const client = createClient({
    projectId: "drqf3xyc",
    dataset: "production",
    apiVersion: "2023-07-11",
    useCdn: false,
  });

  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a delay or when the component mounts
    const categoriesTimeout = setTimeout(() => {
      setCategoriesVisible(true);
    }, 500);

    const productsTimeout = setTimeout(() => {
      setProductsVisible(true);
    }, 500);

    // Clear the timeouts when the component unmounts
    return () => {
      clearTimeout(categoriesTimeout);
      clearTimeout(productsTimeout);
    };
  }, []);

  return (
    <>
      <div
        className={`categories-container ${
          categoriesVisible ? "fade-in active" : ""
        }`}
      >
        <Category />
      </div>
      <div className="text-center mt-4">
        <h1 className=" text-zinc-600 font-bold text-lg">
          Best Selling Products
        </h1>
        <p className="text-zinc-500 text-sm font-medium">
          Speakers of many variations
        </p>
      </div>
      <div
        className={`products-container ${
          productsVisible ? "fade-in active" : ""
        }`}
      >
        {response.devices?.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const query = `*[_type == "product"]`;
//   const products = await client.fetch(query);
//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData },
//   };
// }

export default Home;
