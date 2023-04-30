import React from "react";

const PendingOrders = ({ pendingOrders }) => {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Pending Orders</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-left">
            <th>Side</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map((order, index) => (
            <tr key={index} className="bg-gray-100 odd:bg-white">
              <td>{order.side}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
