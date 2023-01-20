import { Router } from 'express';
import { products } from './Products';
import { users } from './Users';

const router = Router();

router.use('/users', users);
router.use('/products', products);

export default router;
