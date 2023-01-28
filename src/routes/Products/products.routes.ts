import express from 'express';
import {
  postProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProduct,
  getProductsByName
} from '../../controllers/products.controller';

const router = express.Router();

router.get('', getProducts);
router.get('/:idProduct', getProductById);
router.post('', postProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', restoreProduct);
router.get('/search/:name', getProductsByName);

export default router;
