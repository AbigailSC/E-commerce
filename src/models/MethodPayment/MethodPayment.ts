import { Schema, model, Document } from 'mongoose';

export interface IMethodPayment extends Document {
  name: string;
}

const methodPaymentSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default model<IMethodPayment>('methodPayment', methodPaymentSchema);
