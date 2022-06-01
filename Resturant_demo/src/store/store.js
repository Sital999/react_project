import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../Features/foodSlice";
import cartReducer from "../Features/cartSlice"
import commentReducer from "../Features/commentSlice"

const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
    comment: commentReducer,
  },
});
export default store;
