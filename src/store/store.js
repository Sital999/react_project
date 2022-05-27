import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../Features/foodSlice";
import cartReducer from "../Features/cartSlice"

const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});
export default store;
