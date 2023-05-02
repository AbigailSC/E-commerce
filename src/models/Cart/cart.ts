import { Schema, model, Document } from 'mongoose';

export interface ICart extends Document {
  clientId: string;
  products: string[];
}

const cartSchema = new Schema({
  clientId: {
    type: String,
    required: true
  },
  products: [
    {
      type: String,
      required: true
    }
  ]
});

export default model<ICart>('cart', cartSchema);
