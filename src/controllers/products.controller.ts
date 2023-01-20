import { RequestHandler } from 'express';
import { Product as ProductSchema } from '@models/Products';
import { IProduct } from '@models/Products/products';

export const postProducts: RequestHandler<IProduct> = async (req, res) => {
  const { name, description, price, stock, image }: IProduct = req.body;
  try {
    const newProduct = new ProductSchema({
      name,
      description,
      price,
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
    const products = await ProductSchema.find({ isActived: true });
    return res.status(200).json(products);
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

export const updateProduct: RequestHandler<IProduct> = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, image }: IProduct = req.body;
  const findProductById = await ProductSchema.findById(id);
  try {
    if (findProductById != null) {
      await findProductById.updateOne(
        {
          name,
          description,
          price,
          stock,
          image
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

export const deleteProduct: RequestHandler = async (_req, res) => {
  const { id } = _req.params;

  try {
    const deleteProduct = await ProductSchema.update(
      { id },
      {
        isActive: false
      }
    );
    return res.status(201).json(deleteProduct);
  } catch (error) {
    console.error(error);
  }
};
