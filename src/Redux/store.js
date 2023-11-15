import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import { persistedReducer } from "./persistReducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
