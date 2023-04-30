import mongoose from "mongoose";


const Schema = mongoose.Schema;

const CompletedOrderSchema = new Schema({
   price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});


const CompletedOrder = mongoose.model('CompletedOrder', CompletedOrderSchema);


export default CompletedOrder 