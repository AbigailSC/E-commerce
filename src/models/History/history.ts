import { Schema, model, Document } from 'mongoose';

export interface IHistory extends Document {
  orderId: string;
  userId: string;
  date: Date;
  price: number;
}

const HistorySchema = new Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IHistory>('history', HistorySchema);
