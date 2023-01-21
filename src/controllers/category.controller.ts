import { RequestHandler } from 'express';
import { Category } from '@models/Category';
import { ICategory } from '@models/Category/category';

export const createCategory: RequestHandler<ICategory> = async (req, res) => {
  const { name }: ICategory = req.body;
  try {
    const newCategory: ICategory = new Category({ name });
    const savedCategory = await newCategory.save();
    return res.status(201).json(savedCategory);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const getCategories: RequestHandler = async (_req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const updateCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name }: ICategory = req.body;
  try {
    const category = await Category.findById(id);
    if (category === null) {
      return res.status(404).json({ message: 'Category not found' });
    }
    category.name = name;
    await category.save();
    return res.status(200).json({ message: 'Category updated' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const deleteCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (category === null) {
      return res.status(404).json({ message: 'Category not found' });
    }
    await category.remove();
    return res.status(200).json({ message: 'Category deleted' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
