import { configureStore } from "@reduxjs/toolkit";
import bookMarkReducer from "./bookMarkSlice";

const appStore = configureStore({
  reducer: {
    bookmark: bookMarkReducer,
  },
});

export default appStore;
