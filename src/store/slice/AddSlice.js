import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const addSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    totalAmount: 0,
    error: null,
  },
  reducers: {
    addSingleData: (state, action) => {
      state.data.push(action.payload);
    },
    removeOneItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id)
    },

    
  },
});

export const { addSingleData, removeOneItem, totalCart} = addSlice.actions;
export default addSlice.reducer;
