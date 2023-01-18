import { Router } from 'express';
import products from './products.routes';
import { users } from './User';

const router = Router();

router.use('/user', users);
router.use('/products', products);

export default router;
