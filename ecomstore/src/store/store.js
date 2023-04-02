import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/productCard/addToCartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
