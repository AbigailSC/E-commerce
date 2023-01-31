import express from 'express';
import {
  postProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProduct,
  getProductsByName,
  filterProductsByCategory
} from '../../controllers/products.controller';

const router = express.Router();

router.get('', getProducts);
router.get('/:idProduct', getProductById);
router.post('', postProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', restoreProduct);
router.get('/search/:name', getProductsByName);
router.get('/category/:category', filterProductsByCategory);

export default router;
