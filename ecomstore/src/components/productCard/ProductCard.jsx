import React from "react";
import "./productCard.css";

import { addToCart, removeFromCart } from "./addToCartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { id, thumbnail, description, title, price, stock } = props.product;
  const quantity = useSelector((state) => state.cart.cartCount);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="product-title">{title.slice(0, 26)}...</div>
      <div className="product-description">{description.slice(0, 48)}...</div>
      <div className="row product-meta">
        <div className="product-meta-item">$ {price}</div>

        <div>
          <button
            className="card-btn"
            onClick={() => dispatch(addToCart({ title, price, thumbnail, id }))}
          >
            Add to cart
          </button>
          {/* <button
            className="card-btn"
            onClick={() => dispatch(removeFromCart({ id }))}
          >
            remove +
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
