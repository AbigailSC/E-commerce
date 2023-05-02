import { Router } from 'express';
import {
  getFavorites,
  getFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite
} from '@controllers/favorites.controller';
import { userRoles } from '@utils/userRoles';
import { verifyRoles } from '@middlewares/auth.middleware';

const router = Router();

router
  .route('/')
  .get([verifyRoles([userRoles.Admin])], getFavorites)
  .post([verifyRoles([userRoles.Client])], createFavorite);
router
  .route('/:id')
  .get([verifyRoles([userRoles.Client, userRoles.Admin])], getFavorite)
  .put([verifyRoles([userRoles.Client])], updateFavorite)
  .delete([verifyRoles([userRoles.Client])], deleteFavorite);

export default router;
