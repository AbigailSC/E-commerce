import { Router } from 'express';
import {
  getCity,
  getCities,
  createCity,
  updateCity,
  deleteCity
} from '@controllers/city.controller';
import { verifyRoles } from '@middlewares/auth.middleware';
import { userRoles } from '@utils/userRoles';

const router = Router();

router
  .route('/')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    getCities
  )
  .post([verifyRoles([userRoles.Admin])], createCity);
router
  .route('/:id')
  .get(
    [verifyRoles([userRoles.Admin, userRoles.Client, userRoles.Seller])],
    getCity
  )
  .put([verifyRoles([userRoles.Admin])], updateCity)
  .delete([verifyRoles([userRoles.Admin])], deleteCity);

export default router;
