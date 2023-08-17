import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* <p>50%</p> */}
          <h3>50%</h3>
          <h3>DISCOUNT</h3>
          <p>13 June 2023</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Qz7Aioy1ODz1X9ysiFZLxfMoBtK871_psw&usqp=CAU"
          className=""
        />
        <div className="right">
          <p>HUAWEI</p>
          <h3>Nova Y70</h3>
          <p className="max-w-xs">Lorem ipsum dolor sit amet.</p>
          <Link href={`/product/`}>
            <button type="button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
