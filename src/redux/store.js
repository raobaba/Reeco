import { configureStore } from "@reduxjs/toolkit";
import { greetingReducer,reducer } from "./reducer/reducer.js";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    mainReducer: reducer,
  },
});

export default store;
