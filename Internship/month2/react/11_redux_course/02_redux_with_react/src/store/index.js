import { configureStore } from "@reduxjs/toolkit";

// imported files
import authReducers from "./Auth";
import counterReducers from "./Counter";

const store = configureStore({
  reducer: { counter: counterReducers, auth: authReducers },
});

export default store;
