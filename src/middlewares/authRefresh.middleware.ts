import { DecodedToken } from './auth.middleware';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export interface VerifyRefreshToken extends Request {
  id?: string;
}

export const verifyRefreshToken = (
  req: VerifyRefreshToken,
  _res: Response,
  next: NextFunction
): void => {
  const { refreshToken } = req.cookies;
  try {
    if (refreshToken === undefined)
      throw new Error('No refresh token provided');
    const { id } = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH ?? 'REFRESH'
    ) as DecodedToken;
    console.log('🚀 ~ file: authRefresh.middleware.ts:22 ~ id:', id);
    req.id = id;
    next();
  } catch (error) {
    console.log(error);
    throw new Error('Access denied, you re not Logged In');
  }
};
