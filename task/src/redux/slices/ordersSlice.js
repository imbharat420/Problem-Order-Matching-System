import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchPendingOrders = createAsyncThunk(
  "orders/fetchPending",
  async () => {
    const response = await api.get("/pending-orders");
    return response.data;
  }
);

export const fetchCompletedOrders = createAsyncThunk(
  "orders/fetchCompleted",
  async () => {
    const response = await api.get("/completed-orders");
    return response.data;
  }
);

export const addNewOrder = createAsyncThunk(
  "orders/addNew",
  async (newOrder) => {
    await api.post("/new-order", newOrder);
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    pendingOrders: [],
    completedOrders: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPendingOrders.fulfilled, (state, action) => {
      state.pendingOrders = action.payload;
    });
    builder.addCase(fetchCompletedOrders.fulfilled, (state, action) => {
      state.completedOrders = action.payload;
    });
  },
});

export default orderSlice.reducer;
