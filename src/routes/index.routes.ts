import { Router } from 'express';
import productRoutes from './products.routes';
import { users } from './User';

const router = Router();

router.use('/user', users);

router.get('/api', (_req, res) => {
  res.json({ message: 'ruta api' });
});

router.get('/panchoconpapitas', (_req, res) => {
  res.json({ message: 'pancho con papitas' });
});

router.use('/products', productRoutes);

export default router;
