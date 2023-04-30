import React, { useState } from "react";

const NewOrderForm = ({ onSubmit }) => {
  const [side, setSide] = useState("Buy");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ side, qty: Number(qty), price: Number(price) });
    setQty("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">New Order</h2>
      <div className="mb-4">
        <label className="block mb-2">Side</label>
        <select
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Buy</option>
          <option>Sell</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default NewOrderForm;
