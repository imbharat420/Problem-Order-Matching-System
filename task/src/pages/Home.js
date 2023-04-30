import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPendingOrders,
  fetchCompletedOrders,
  addNewOrder,
} from "../redux/slices/ordersSlice";
import PendingOrders from "../components/PendingOrders";
import CompletedOrders from "../components/CompleteOrders";
import NewOrderForm from "../components/NewOrder";
import CompletedOrdersChart from "../components/CompletedOrdersChart";

function App() {
  const dispatch = useDispatch();
  const pendingOrders = useSelector((state) => state.orders.pendingOrders);
  const completedOrders = useSelector((state) => state.orders.completedOrders);

  useEffect(() => {
    dispatch(fetchPendingOrders());
    dispatch(fetchCompletedOrders());
  }, [dispatch]);

  const handleNewOrder = (order) => {
    dispatch(addNewOrder(order));
    dispatch(fetchPendingOrders());
    dispatch(fetchCompletedOrders());
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Order Matching System</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <NewOrderForm onSubmit={handleNewOrder} />
        </div>
        <div>
          <PendingOrders pendingOrders={pendingOrders} />
        </div>
        <div>
          <CompletedOrders completedOrders={completedOrders} />
        </div>
        <div></div>
      </div>
      <CompletedOrdersChart completedOrders={completedOrders} />
    </div>
  );
}

export default App;
