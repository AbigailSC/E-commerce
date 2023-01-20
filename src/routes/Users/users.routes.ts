import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '@controllers/users.controller';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:idUser', getUserById);
router.put('/:id', updateUser);
router.delete('/:idUser', deleteUser);

export default router;
