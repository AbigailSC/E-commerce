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

export const getProducts: RequestHandler = async (_req, res) => {
  try {
    const products = await Product.find({ isActived: true });
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProductById: RequestHandler = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const product = await Product.findById(idProduct);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const updateProduct: RequestHandler<IProduct> = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock }: IProduct = req.body;
  const findProductById = await Product.findById(id);
  try {
    if (findProductById != null) {
      await findProductById.updateOne(
        {
          name,
          description,
          price,
          stock
        },
        {
          where: {
            id
          }
        }
      );
      res.send({ msg_message: 'Product updated' });
    } else {
      res.send({ msg_message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};
