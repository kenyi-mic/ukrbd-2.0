import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import cartReducer from "./features/cartSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cart: cartReducer,
    user: userSlice,
  },
});
