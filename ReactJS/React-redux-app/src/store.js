import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productsSlice";
import selectProductReducer from "./redux/selectProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    selectProduct: selectProductReducer,
  },
});

