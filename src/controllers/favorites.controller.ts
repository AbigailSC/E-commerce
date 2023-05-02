import { RequestHandler } from 'express';
import { FavoriteSchema } from '@models/Favorite';
import { ProductSchema } from '@models/Product';
import { UserSchema } from '@models/User';
import { IFavorite } from '@models/Favorite/Favorite';

export const getFavorites: RequestHandler = async (_req, res) => {
  try {
    const favoritesDb = await FavoriteSchema.find();
    const favorites = await Promise.all(
      favoritesDb.map(async (favorite) => {
        const userData = await UserSchema.findById({ _id: favorite.userId });
        const productData = await ProductSchema.findById({
          _id: favorite.productId
        });
        return {
          _id: favorite._id,
          userId: userData,
          productId: productData
        };
      })
    );
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const getFavorite: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const favorite = await FavoriteSchema.findById(id);
    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const createFavorite: RequestHandler = async (req, res) => {
  const { userId, productId, quantity }: IFavorite = req.body;
  try {
    const newFavorite = new FavoriteSchema({
      userId,
      productId,
      quantity
    });
    await newFavorite.save();
    return res.status(201).json(newFavorite);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const updateFavorite: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { userId, productId, quantity }: IFavorite = req.body;
  try {
    const updatedFavorite = await FavoriteSchema.findByIdAndUpdate(id, {
      userId,
      productId,
      quantity
    });
    return res.status(200).json(updatedFavorite);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const deleteFavorite: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFavorite = await FavoriteSchema.findByIdAndDelete(id);
    return res.status(200).json(deletedFavorite);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
