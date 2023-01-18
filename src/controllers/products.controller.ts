import { IProduct } from '@models/Products/products';
import { RequestHandler } from 'express';
import { Product } from '../models/Products/index';

export const postProducts: RequestHandler<IProduct> = async (req, res) => {
  const { name, description, price, stock }: IProduct = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      isActived: true
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};
