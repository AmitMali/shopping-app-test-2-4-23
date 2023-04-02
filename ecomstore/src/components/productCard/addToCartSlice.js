import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.cartItems.push(actions.payload);
      state.cartCount += 1;
    },
    removeFromCart: (state, actions) => {
      state.cartItems.reduce((item) => item.id != actions.payload.id);

      state.cartCount -= 1;
    },
    // addToCart: (state, actions) => {
    //   state.cartItems.push(actions.payload);
    //   state.cartCount += 1;
    // },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
