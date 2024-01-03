import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    stripeId: { type: String, required: true },
    userId: { type: String, required: true },
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number,required: true }, // You can adjust this based on your needs
      },
    ],
    billingAddress: { type: Array, required: true },
    totalAmount: { type: Number, required: true },
    isDelivered: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;