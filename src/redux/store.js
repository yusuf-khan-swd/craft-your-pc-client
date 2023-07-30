import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./feature/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
