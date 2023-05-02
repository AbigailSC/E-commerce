import { Schema, model, Document } from 'mongoose';

export interface IReviews extends Document {
  clientId: string;
  productId: string;
  review: string;
  rating: number;
  isActive: boolean;
}

const reviewsSchema = new Schema(
  {
    clientId: {
      type: String,
      required: true
    },
    productId: {
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

export default model<IReviews>('review', reviewsSchema);
