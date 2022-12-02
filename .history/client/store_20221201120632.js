import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "expo/AppEntry";
import cartReducer from "./redux/cartStore";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cart: cartReducer,
  },
});
