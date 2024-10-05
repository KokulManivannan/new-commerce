// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";

// Create the store
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
