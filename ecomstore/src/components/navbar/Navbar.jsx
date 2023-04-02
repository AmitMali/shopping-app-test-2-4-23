import React from "react";

import "./navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  return (
    <div className="container shadow">
      <div className="row justify-between navbar ">
        <span className="">My Store</span>
        <span>
          <b>CART {cartCount}</b>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
