import { RequestHandler } from 'express';
import { ProductSchema } from '@models/Product';
import { IProduct } from '@models/Product/Product';
import { taxes } from '@utils/taxes';
import { SellerSchema } from '@models/Seller';
import { CategorySchema } from '@models/Category';
import { MethodPaymentSchema } from '@models/MethodPayment';
import { IQuery } from '@interfaces/paginate';
import { SortOrder } from 'mongoose';

export const postProducts: RequestHandler = async (req, res) => {
  const {
    name,
    description,
    price,
    stock,
    categoryId,
    sellerId,
    imageId,
    methodPayment
  }: IProduct = req.body;
  try {
    const productDuplicate = await ProductSchema.findOne({ name, sellerId });
    if (productDuplicate != null) {
      return res.status(400).json({ message: 'Product already exists' });
    }
    const newProduct = new ProductSchema({
      name,
      description,
      price: taxes(price),
      stock,
      imageId,
      sellerId,
      categoryId,
      methodPayment
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProducts: RequestHandler = async (req, res) => {
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({ isActive: true }).count();
    const products = await ProductSchema.find({ isActive: true })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const productsAvailable = products.filter((product) => product.isAvailable);

    if (productsAvailable.length === 0)
      return res.status(404).json({ message: 'Products not found' });

    const allProducts = await Promise.all(
      productsAvailable.map(async (product) => {
        const seller = await SellerSchema.findById(product.sellerId);
        const category = await CategorySchema.findById(product.categoryId);
        const methodPayment = await Promise.all(
          product.methodPayment.map(async (method) => {
            const methods = await MethodPaymentSchema.findById(method);
            return methods?.name;
          })
        );
        return {
          ...product.toJSON(),
          sellerId: seller?.toJSON(),
          categoryId: category?.toJSON(),
          methodPayment
        };
      })
    );
    res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products: allProducts
    });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProductById: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await ProductSchema.findById(productId);
    if (product === null)
      return res.status(404).json({ message: 'Product not found' });

    const seller = await SellerSchema.findById(product.sellerId);
    const category = await CategorySchema.findById(product.categoryId);
    const methodPayment = await Promise.all(
      product.methodPayment.map(async (method) => {
        const methods = await MethodPaymentSchema.findById(method);
        return methods?.name;
      })
    );
    return res.status(200).json({
      ...product.toJSON(),
      sellerId: seller?.toJSON(),
      categoryId: category?.toJSON(),
      methodPayment
    });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const getProductsByName: RequestHandler = async (req, res) => {
  const { name } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true,
      name: { $regex: name, $options: 'i' }
    }).count();

    const products = await ProductSchema.find({
      isActive: true,
      name: { $regex: name, $options: 'i' }
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    products.length > 0
      ? res.status(200).json({
          totalPages: Math.ceil(productsLength / limit),
          currentPage: Number(page),
          hasNextPage: limit * page < productsLength,
          hasPreviousPage: page > 1,
          products
        })
      : res.send({ message: 'Product not found' });
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const updateProduct: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const {
    name,
    description,
    price,
    stock,
    imageId,
    isAvailable,
    methodPayment
  }: IProduct = req.body;
  const updateProduct = await ProductSchema.findByIdAndUpdate(productId, {
    name,
    description,
    price,
    stock,
    imageId,
    isAvailable,
    methodPayment
  });
  try {
    if (updateProduct != null) {
      res.status(200).json(updateProduct);
    } else {
      res.status(500).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: { error: err } });
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  try {
    const deleteProduct = await ProductSchema.findByIdAndUpdate(productId, {
      isActive: false
    });
    deleteProduct !== null
      ? res.status(200).json(deleteProduct)
      : res.send({ message: 'Product not found' });
  } catch (error) {
    console.error(error);
  }
};

export const restoreProduct: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  try {
    const restoreProduct = await ProductSchema.findByIdAndUpdate(productId, {
      isActive: true
    });
    restoreProduct !== null
      ? res.status(200).json(restoreProduct)
      : res.send({ message: 'Product not found' });
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByCategory: RequestHandler = async (req, res) => {
  const { categoryId } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true,
      categoryId
    }).count();
    const products = await ProductSchema.find({
      isActive: true,
      categoryId
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getProductsBySeller: RequestHandler = async (req, res) => {
  const { sellerId } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true,
      sellerId
    }).count();
    const products = await ProductSchema.find({
      isActive: true,
      sellerId
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getProductsByMethodPayment: RequestHandler = async (req, res) => {
  const { methodPaymentId } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true,
      methodPayment: methodPaymentId
    }).count();
    const products = await ProductSchema.find({
      isActive: true,
      methodPayment: methodPaymentId
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getProductsByRangePrice: RequestHandler = async (req, res) => {
  const { min, max } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true,
      price: { $gte: min, $lte: max }
    }).count();
    const products = await ProductSchema.find({
      isActive: true,
      price: { $gte: min, $lte: max }
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getProductsByRangePriceAndCategory: RequestHandler = async (
  req,
  res
) => {
  const { min, max, categoryId } = req.params;
  try {
    const products = await ProductSchema.find({
      isActive: true,
      price: { $gte: min, $lte: max },
      categoryId
    });
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const sortProductsByPrice: RequestHandler = async (req, res) => {
  const { sort }: { sort?: SortOrder | { $meta: 'textScore' } } = req.params;
  const { page = 1, limit = 10 } = req.query as IQuery;
  try {
    const productsLength = await ProductSchema.find({
      isActive: true
    })
      .sort(sort !== undefined ? { price: sort } : {})
      .count();
    const products = await ProductSchema.find({
      isActive: true
    })
      .sort(sort !== undefined ? { price: sort } : {})
      .limit(limit * 1)
      .skip((page - 1) * limit);
    if (products.length === 0)
      return res.status(404).json({ message: 'Products not found' });
    return res.status(200).json({
      totalPages: Math.ceil(productsLength / limit),
      currentPage: Number(page),
      hasNextPage: limit * page < productsLength,
      hasPreviousPage: page > 1,
      products
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

// export const sortProductsByName: RequestHandler = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(500).json({ message: (error as Error).message });
//   }
// };

// export const sortProductsByDate: RequestHandler = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(500).json({ message: (error as Error).message });
//   }
// };
