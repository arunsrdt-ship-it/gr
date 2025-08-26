import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice";
import reducer from "./slice/ProductSlice";

const doingSlice = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default doingSlice;
