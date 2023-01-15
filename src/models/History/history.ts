import { Schema, model, Document } from 'mongoose';

export interface IHistory extends Document {
  idProduct: string;
  idUser: string;
}

const HistorySchema = new Schema(
  {
    idProduct: {
      type: String,
      required: true
    },
    idUser: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IHistory>('history', HistorySchema);
