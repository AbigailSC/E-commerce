import { Schema, model, Document } from 'mongoose';

export interface ICountry extends Document {
  clientId: string;
  productId: string;
  quantity: number;
}

const countrySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ICountry>('country', countrySchema);
