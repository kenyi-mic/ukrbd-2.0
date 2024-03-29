import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import cartReducer from "./cartStore";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cart: cartReducer,
  },
});
