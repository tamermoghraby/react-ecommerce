import React from "react";
import Link from "next/link";

// import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">HUAWEI</p>
        <h3>P40 Pro</h3>
        <h1>HUAWEI p40 pro</h1>
        <div className="background-wrapper">
          <img
            alt="headphones"
            src="https://testshop.stc.com.bh/image/catalog/huawei-p40-lite-1.jpg"
            className="hero-banner-image"
          />
        </div>

        <div>
          <Link href={`/product`}>
            <button type="button">Shop Now</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              magni esse magnam ad cum quibusdam totam. Corrupti, soluta
              inventore rerum perspiciatis aut dicta, velit, ipsa odit magni
              nulla eaque dolores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
