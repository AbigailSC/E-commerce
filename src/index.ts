import express from 'express';
import indexRoute from '@routes/index.routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongo = process.env.MONGODB_URI;

mongoose
  .connect(mongo as string)
  .then(() => console.log('✔️ ...Connected to mongoDB Atlas'))
  .catch((error) => console.error(error));

app.use('/', indexRoute);

app.listen(3000, () => console.log('✔️ ...Server running on port 3000'));
