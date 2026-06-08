import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  name: String,
  message: String,
  amount: Number,

  orderId: String,
 

  done: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);