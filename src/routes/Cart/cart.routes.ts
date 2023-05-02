import { Router } from 'express';
import {
  createCart,
  deleteCart,
  getCart,
  updateCart
} from '@controllers/cart.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';

const router = Router();

router.route('/').post([verifyRoles([userRoles.Client])], createCart);
router
  .route('/:id')
  .get([verifyRoles([userRoles.Admin, userRoles.Client])], getCart)
  .put([verifyRoles([userRoles.Client])], updateCart)
  .delete([verifyRoles([userRoles.Client])], deleteCart);

export default router;
