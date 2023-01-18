import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser
} from '@controllers/user';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:idUser', getUserById);
router.delete('/:idUser', deleteUser);

export default router;
