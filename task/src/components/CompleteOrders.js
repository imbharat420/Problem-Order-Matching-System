import React from "react";

const CompletedOrders = ({ completedOrders }) => {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Completed Orders</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-left">
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {completedOrders.map((order, index) => (
            <tr key={index} className="bg-gray-100 odd:bg-white">
              <td>{order.qty}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedOrders;
