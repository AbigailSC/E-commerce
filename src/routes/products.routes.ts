import express from 'express';
import {
  postProducts,
  getProducts,
  getProductById,
  updateProduct
} from '../controllers/products.controller';

const router = express.Router();

router.post('', postProducts);
router.get('', getProducts);
router.get('/:idProduct', getProductById);
router.put('/:id', updateProduct);

export default router;
