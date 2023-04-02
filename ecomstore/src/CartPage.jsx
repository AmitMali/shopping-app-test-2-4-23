import React from "react";

import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });
  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="">
        <h3>
          <u>Products</u>
        </h3>
        {cartItems &&
          cartItems.map((item, i) => {
            return (
              <div key={i}>
                <h3>{item.title}</h3>
                <p>Price{item.price}</p>
              </div>
            );
          })}
      </div>
      <div>
        <h2>{totalPrice > 0 ? `Total = ${totalPrice}` : ""}</h2>
      </div>
    </div>
  );
};

export default CartPage;
