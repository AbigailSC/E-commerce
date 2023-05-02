import { Schema, model, Document } from 'mongoose';

export interface ICity extends Document {
  name: string;
}

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    countryId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ICity>('city', citySchema);
