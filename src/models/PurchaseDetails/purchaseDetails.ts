import { Schema, model, Document } from 'mongoose';

export interface IPurchaseDetails extends Document {
  idSeller: string;
  idBuyer: string;
  idProduct: string;
  idTransaction: string;
  quantity: number;
  price: number;
  status: string;
}

const purchaseDetailsSchema = new Schema(
  {
    idSeller: {
      type: String,
      required: true
    },
    idBuyer: {
      type: String,
      required: true
    },
    idProduct: {
      type: String,
      required: true
    },
    idTransaction: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IPurchaseDetails>(
  'PurchaseDetails',
  purchaseDetailsSchema
);
