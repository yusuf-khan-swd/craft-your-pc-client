import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
