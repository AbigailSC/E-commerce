import { Router } from 'express';
import {
  getAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin
} from '@controllers/admin.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';
import { verifyEmail, verifyPhone } from '@validations/body.validations';

const router = Router();

router
  .route('/')
  .get(verifyRoles([userRoles.Admin]), getAdmins)
  .post(
    [verifyRoles([userRoles.Admin]), verifyEmail(), verifyPhone()],
    createAdmin
  );
router
  .route('/:id')
  .get([verifyRoles([userRoles.Admin])], getAdminById)
  .put(
    [verifyRoles([userRoles.Admin]), verifyEmail(), verifyPhone()],
    updateAdmin
  )
  .delete([verifyRoles([userRoles.Admin])], deleteAdmin);

export default router;
