import { RequestHandler } from 'express';
import { Product as ProductSchema } from '@models/Products';
import { IProduct } from '@models/Products/products';
import { taxes } from '@utils/taxes';

export const postProducts: RequestHandler<IProduct> = async (req, res) => {
  const { name, description, price, stock, image }: IProduct = req.body;
  try {
    const newProduct = new ProductSchema({
      name,
      description,
      price: taxes(price),
      stock,
      image,
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
    const products = await ProductSchema.find({ isActive: true });
    products.length > 0
      ? res.json(products)
      : res.send({ msg_mesage: 'No products found' });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProductById: RequestHandler = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const product = await ProductSchema.findById(idProduct);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProductsByName: RequestHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const products = await ProductSchema.find({
      isActive: true,
      name: { $regex: name, $options: 'i' }
    });
    products.length > 0
      ? res.status(200).json(products)
      : res.send({ msg_message: 'Product not found' });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const updateProduct: RequestHandler<IProduct> = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, image }: IProduct = req.body;
  const updateProduct = await ProductSchema.findByIdAndUpdate(id, {
    name,
    description,
    price,
    stock,
    image
  });
  try {
    if (updateProduct != null) {
      res.status(200).json(updateProduct);
    } else {
      res.status(500).json({ msg_message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const deleteProduct: RequestHandler = async (_req, res) => {
  const { id } = _req.params;

  try {
    const deleteProduct = await ProductSchema.findByIdAndUpdate(id, {
      isActive: false
    });
    deleteProduct !== null
      ? res.status(200).json(deleteProduct)
      : res.send({ msg_message: 'Product not found' });
  } catch (error) {
    console.error(error);
  }
};

export const restoreProduct: RequestHandler = async (_req, res) => {
  const { id } = _req.params;

  try {
    const restoreProduct = await ProductSchema.findByIdAndUpdate(id, {
      isActive: true
    });
    restoreProduct !== null
      ? res.status(200).json(restoreProduct)
      : res.send({ msg_message: 'Product not found' });
  } catch (error) {
    console.error(error);
  }
};

export const filterProductsByCategory: RequestHandler = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await ProductSchema.find({
      isActive: true,
      category: { $in: category }
    });
    products.length > 0
      ? res.status(200).json(products)
      : res.send({ msg_message: 'Products not found' });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};
