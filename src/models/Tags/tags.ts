import { Schema, model, Document } from 'mongoose';

export interface ITags extends Document {
  name: string;
}

const tagsSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ITags>('tags', tagsSchema);
