import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "./StateReducer";

export const Store = configureStore({
  reducer: {
    metaDataRedux: StateReducer
  },
  devTools: true
});
