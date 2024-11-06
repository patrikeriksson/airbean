import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Coffee } from "../../types/types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ coffee: Coffee; quantity: number }>
    ) => {
      const { coffee, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.coffee.id === coffee.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ coffee, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
