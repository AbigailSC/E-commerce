import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string[];
  stock: number;
  image: string[];
  favorites: string[];
  cart: string[];
  rol: boolean;
  isActived: boolean;
  paymentDetails: string[];
  history: string[];
}

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      lowercase: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    rol: {
      type: Boolean
    },
    isActive: {
      type: Boolean,
      default: true
    },
    favorites: [],
    image: [],
    category: [],
    cart: [],
    paymentDetails: [],
    history: []
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IProduct>('Product', productSchema);
