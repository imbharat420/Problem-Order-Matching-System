import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";

/**[- MODELS -]**/
import PendingOrder from "./models/pendingOrder.model.js";
import CompletedOrder from "./models/completeOrder.model.js";


connectDB();

const seedPendingOrders = [
  { side: "Buy", qty: 10, price: 99 },
  { side: "Sell", qty: 20, price: 100 },
  { side: "Buy", qty: 50, price: 98 },
  { side: "Sell", qty: 20, price: 101 },
  { side: "Buy", qty: 70, price: 97 },
  { side: "Sell", qty: 130, price: 102 },
  { side: "Buy", qty: 80, price: 96 },
  { side: "Sell", qty: 150, price: 103 },
  { side: "Buy", qty: 10, price: 96 },
  { side: "Sell", qty: 70, price: 104 },
];

const seedCompletedOrders = [
  { price: 100.5, qty: 50 },
];

const seedDatabase = async () => {
  try {
    await PendingOrder.deleteMany({});
    await CompletedOrder.deleteMany({});

    await PendingOrder.insertMany(seedPendingOrders);
    await CompletedOrder.insertMany(seedCompletedOrders);

    console.log("Database seeded successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding the database: ", error);
  }
};

seedDatabase();
