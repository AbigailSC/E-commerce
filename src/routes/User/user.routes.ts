import { Router } from 'express';
import { createUser } from '@controllers/user';

const router: Router = Router();

router.post('/', createUser);

export default router;
