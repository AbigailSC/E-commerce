import { Schema, model, Document } from 'mongoose';

export interface IOrder extends Document {
  clientId: string;
  methodPaymentId: string;
  productId: string;
  quantity: number;
  statusId: string;
  address: string;
  amount: number;
  sellerId: string;
}

const orderSchema = new Schema({
  clientId: {
    type: String,
    required: true
  },
  methodPaymentId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  statusId: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  sellerId: {
    type: String,
    required: true
  }
});

export default model<IOrder>('order', orderSchema);
