import express from 'express';
import {
  postProducts,
  getProducts,
  getProductById
} from '../controllers/products.controller';

const router = express.Router();

router.post('', postProducts);
router.get('', getProducts);
router.get('/:idProduct', getProductById);

export default router;
