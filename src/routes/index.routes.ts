import { Router } from 'express';
import { products } from './Products';
import { users } from './Users';
import { category } from './Category';
import { cart } from './Cart';
import { clients } from './Client';
import { sellers } from './Sellers';
import { admins } from './Admin';
import { auth } from './Auth';
import { city } from './City';
import { favorites } from './Favorites';
import { history } from './History';

const router = Router();

router.use('/admin', admins);
router.use('/auth', auth);
router.use('/cart', cart);
router.use('/categories', category);
router.use('/cities', city);
router.use('/clients', clients);
router.use('/favorites', favorites);
router.use('/history', history);
router.use('/products', products);
router.use('/sellers', sellers);
router.use('/users', users);

export default router;
