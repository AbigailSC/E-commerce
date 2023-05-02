import mongoose from 'mongoose';
import chalk from 'chalk';
// import { MethodPaymentSchema } from '@models/MethodPayment';
// import methodPayment from '../data/methodPayment.json';

// const { MONGODB_URI } = process.env;

mongoose.set('strictQuery', false);

// const db = MONGODB_URI ?? 'mongodb://127.0.0.1:27017/ecommerce';

const db = 'mongodb://127.0.0.1:27017/ecommerce';

export const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(db);
    console.log(chalk.green('✔️ ...Database connected!'));
    // await MethodPaymentSchema.insertMany(methodPayment);
  } catch (error) {
    console.error(error);
    throw new Error(chalk.red('❌ ...Database connection failed!'));
  }
};
