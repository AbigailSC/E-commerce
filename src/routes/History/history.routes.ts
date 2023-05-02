import { Router } from 'express';
import {
  getHistory,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory
} from '@controllers/history.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';

const router = Router();

router
  .route('/')
  .get([verifyRoles([userRoles.Admin])], getHistory)
  .post([verifyRoles([userRoles.Client])], createHistory);
router
  .route('/:id')
  .get([verifyRoles([userRoles.Admin, userRoles.Client])], getHistoryById)
  .put([verifyRoles([userRoles.Client])], updateHistory)
  .delete([verifyRoles([userRoles.Client])], deleteHistory);

export default router;
