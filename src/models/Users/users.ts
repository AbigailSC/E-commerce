import { Schema, model, Document } from 'mongoose';

export interface IUsers extends Document {
  name: string;
  address: string;
  phone: number;
  password: string;
  email: string;
  image: string;
  favorites: string[];
  cart: string[];
  role: boolean;
  isActive: boolean;
  paymentDetails: string[];
  history: string[];
}

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    role: {
      type: Boolean
    },
    isActive: {
      type: Boolean,
      required: true
    },
    favorites: [],
    cart: [],
    history: [],
    paymentDetails: []
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IUsers>('users', usersSchema);
