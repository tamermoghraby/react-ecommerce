import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Eshop</Link>
      </p>

      <button type="button" className="cart-icon">
        <span className="cart-item-qty">1</span>
        <AiOutlineShopping />
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
