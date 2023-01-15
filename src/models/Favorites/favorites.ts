import { Schema, model, Document } from 'mongoose';

export interface IFavorite extends Document {
  idUser: string;
  idProduct: string;
  quantity: number;
}

const FavoriteSchema = new Schema(
  {
    idUser: {
      type: String,
      required: true
    },
    idProduct: {
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
