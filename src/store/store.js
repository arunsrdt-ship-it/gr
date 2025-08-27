import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice";
import addSingleData from "./slice/AddSlice";
import reducer from "./slice/ProductSlice";

const doingSlice = configureStore({
  reducer: {
    product: productReducer,
    addData:addSingleData
  },
});

export default doingSlice;
