import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
  profile
} from '@controllers/users.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';
import {
  verifyEmail,
  verifyPassword,
  verifyRol
} from '@validations/body.validations';

const router: Router = Router();

router
  .route('/')
  .get([verifyRoles([userRoles.Admin])], getUsers)
  .post(
    [
      verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller]),
      verifyEmail(),
      verifyRol()
    ],
    createUser
  );
router
  .route('/profile')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    profile
  );
router
  .route('/:id')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    getUserById
  )
  .put([verifyRoles([userRoles.Admin]), verifyPassword()], updateUser)
  .delete([verifyRoles([userRoles.Admin])], deleteUser)
  .patch([verifyRoles([userRoles.Admin])], restoreUser);

export default router;
