import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pendingOrderSchema = new Schema({
  side: {
    type: String,
    enum: ['Buy', 'Sell'],
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});


// Create the models for the orders
const PendingOrder = mongoose.model('PendingOrder', pendingOrderSchema);


export default PendingOrder