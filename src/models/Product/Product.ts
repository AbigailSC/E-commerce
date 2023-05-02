import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  discount: number;
  sellerId: string;
  isActive: boolean;
  categoryId: string;
  methodPayment: string[];
  isAvailable: boolean;
  imageId: string[];
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
    discount: {
      type: Number,
      required: false,
      min: 0,
      max: 100
    },
    sellerId: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true
    },
    categoryId: {
      type: String,
      required: true
    },
    methodPayment: [
      {
        type: String,
        required: true
      }
    ],
    isAvailable: {
      type: Boolean,
      default: true
    },
    imageId: [
      {
        type: String,
        required: false
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IProduct>('product', productSchema);
