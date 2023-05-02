import { Schema, model, Document } from 'mongoose';

export interface IAdmin extends Document {
  name: string;
  lastname: string;
  phone: number;
  email: string;
  document: string;
  image: string;
  countryId: string;
  cityId: string;
}

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    countryId: {
      type: String,
      required: true
    },
    cityId: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    document: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IAdmin>('admin', AdminSchema);
