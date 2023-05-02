import { Schema, model, Document } from 'mongoose';

export interface ITags extends Document {
  name: string;
  categoryId: string;
}

const tagsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ITags>('tag', tagsSchema);
