import { Router } from 'express';
import { createUser, getUsers } from '@controllers/user';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);

export default router;
