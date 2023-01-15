import { Schema, model, Document } from 'mongoose';

export interface IReviews extends Document {
  idUser: string;
  idProduct: string;
  review: string;
  rating: number;
  isActive: boolean;
}

const reviewsSchema = new Schema(
  {
    idUser: {
      type: String,
      required: true
    },
    idProduct: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: false,
      default: '',
      trim: true,
      maxlength: 250
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IReviews>('Reviews', reviewsSchema);
