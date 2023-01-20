import { Router } from 'express';
import { products } from './Products';
import { users } from './Users';
import { category } from './Category';

const router = Router();

router.use('/users', users);
router.use('/products', products);
router.use('/category', category);

export default router;
