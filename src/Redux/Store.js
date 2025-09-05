import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/slices/cartSlice";
import shopReducer from "../Features/slices/shopSlice";
import userReducer from "../Features/slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer,
  },
});
export default store;  