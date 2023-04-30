import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store;
