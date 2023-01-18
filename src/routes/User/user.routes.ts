import { Router } from 'express';
import { createUser, getUsers, getUserById } from '@controllers/user';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:idUser', getUserById);

export default router;
