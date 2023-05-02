import { Schema, model, Document } from 'mongoose';

export interface IRol extends Document {
  name: string;
}

const rolSchema = new Schema(
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

export default model<IRol>('rol', rolSchema);
