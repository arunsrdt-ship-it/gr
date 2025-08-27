import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
   
    removeProduct: (state, action) => {
      state.list = state.list.find((item) => item.id === action.id);
      if (state.list) {
        state.list = state.list.filter((item) => item.id !== action.id);
      } else {
        state.list.map((item) => (item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item));
      }
    },

    removeAll: (state, action) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.products;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
