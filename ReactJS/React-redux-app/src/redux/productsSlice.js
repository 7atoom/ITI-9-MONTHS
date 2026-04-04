import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const timeout = (ms) => new Promise((res) => setTimeout(res, ms));
    await timeout(1000);
    const res = await fetch("http://localhost:3000/items");
    if(!res.ok){
        throw new Error(`HTTP error: ${res.status}`); 
    }
    return res.json();
})

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })
    }
});

export default productSlice.reducer;