import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '@controllers/user';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:idUser', getUserById);
router.put('/:id', updateUser);
router.delete('/:idUser', deleteUser);


export default router;
