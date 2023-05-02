import { Schema, model, Document } from 'mongoose';

export interface IStatus extends Document {
  name: string;
}

const StatusSchema = new Schema(
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

export default model<IStatus>('status', StatusSchema);
