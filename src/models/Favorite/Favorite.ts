import { Schema, model, Document } from 'mongoose';

export interface IFavorite extends Document {
  userId: string;
  productId: string;
  quantity: number;
}

const FavoriteSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IFavorite>('favorite', FavoriteSchema);
