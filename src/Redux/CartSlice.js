import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  amount: 0,
  isLoading: true,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  },

});

// console.log(CartSlice);


export default CartSlice.reducer;
