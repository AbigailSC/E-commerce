import { RequestHandler } from 'express';
import { CartSchema } from '@models/Cart';
import { ClientSchema } from '@models/Client';

export const createCart: RequestHandler = async (req, res) => {
  const { clientId, products } = req.body;
  try {
    const cartDuplicate = await CartSchema.findOne({ clientId, products });
    if (cartDuplicate != null) {
      return res.status(400).json({ message: 'Cart already exists' });
    }
    const newCart = new CartSchema({
      clientId,
      products
    });
    const savedCart = await newCart.save();
    const userData = await ClientSchema.findById({ _id: savedCart.clientId });
    const productData = await ClientSchema.findById({
      _id: savedCart.products
    });

    return res.status(201).json({
      _id: savedCart._id,
      userId: userData,
      productId: productData
    });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
export const getCart: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const carts = await CartSchema.findById(id);
    return res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
export const updateCart: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { clientId, products } = req.body;
  try {
    const cart = await CartSchema.findById(id);
    if (cart === null) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    cart.clientId = clientId;
    cart.products = products;
    await cart.save();
    return res.status(200).json({ message: 'Cart updated' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
export const deleteCart: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartSchema.findById(id);
    if (cart === null) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    await cart.remove();
    return res.status(200).json({ message: 'Cart deleted' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
