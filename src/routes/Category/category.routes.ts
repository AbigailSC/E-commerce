import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
  getCategoryById
} from '@controllers/category.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';

const router = Router();

router
  .route('/')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    getCategories
  )
  .post([verifyRoles([userRoles.Admin])], createCategory);
router
  .route('/:id')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    getCategoryById
  )
  .put([verifyRoles([userRoles.Admin])], updateCategory)
  .delete([verifyRoles([userRoles.Admin])], deleteCategory);

export default router;
