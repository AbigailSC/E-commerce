import express from 'express';
import {
  postProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProduct
} from '../../controllers/products.controller';

const router = express.Router();

router.post('', postProducts);
router.get('', getProducts);
router.get('/:idProduct', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', restoreProduct);

export default router;
