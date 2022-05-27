import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../Features/foodSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});
export default store;
