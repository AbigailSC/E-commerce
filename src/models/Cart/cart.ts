import { Schema, model, Document } from 'mongoose';

export interface ICart extends Document {
  idBuyer: string;
  idProduct: string;
  quantity: number;
}

const cartSchema = new Schema({
  idBuyer: {
    type: String,
    require: true
  },
  idProduct: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    require: true
  }
});

export default model<ICart>('cart', cartSchema);
