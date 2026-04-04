import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const selectProductSlice = createSlice({
  name: "selectProduct",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { selectProduct } = selectProductSlice.actions;
export default selectProductSlice.reducer;