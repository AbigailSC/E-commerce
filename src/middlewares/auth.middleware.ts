import jwt from 'jsonwebtoken';
import { RequestHandler, Request } from 'express';
import { UserSchema } from '@models/User';

export interface CustomRequest extends Request {
  id?: string;
}

export interface DecodedToken {
  id: string;
}

// const userRoles = {
//   Admin: 'Admin',
//   Seller: 'Seller',
//   Client: 'Client'
// };

export const verifyTokenActivated: RequestHandler = async (
  req: CustomRequest,
  res,
  next
) => {
  const token =
    typeof req.headers.authorization === 'string'
      ? req.headers.authorization
      : '';
  const { JWT_SECRET } = process.env;
  try {
    if (token.length === 0)
      return res.status(401).json({ message: 'You need to enter a token' });
    const decoded: DecodedToken = jwt.verify(
      token,
      JWT_SECRET ?? 'SECRET'
    ) as DecodedToken;
    const user = await UserSchema.findById(decoded.id, {
      password: 0
    });
    if (user === null)
      return res.status(404).json({ message: 'No user found' });
    if (user.verified)
      return res.status(401).json({ message: 'Account already activated' });
    if (!user.isActive)
      return res.status(401).json({ message: 'Account is not active' });
    req.id = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ message: 'Access denied, you re not Logged In' });
  }
};

// export const verifyClientToken: RequestHandler = async (req, res, next) => {
//   const token =
//     typeof req.headers.authorization === 'string'
//       ? req.headers.authorization
//       : '';
//   const { JWT_SECRET } = process.env;
//   try {
//     const decoded: DecodedToken = jwt.verify(
//       token,
//       JWT_SECRET ?? 'SECRET'
//     ) as DecodedToken;
//     const clientUser = await UserSchema.findById(decoded.id, {
//       password: 0
//     });
//     if (clientUser === null)
//       return res.status(404).json({ message: 'No user found' });
//     if (clientUser.rol !== userRoles.Client)
//       return res.status(401).json({ message: 'Access denied' });
//     if (!clientUser.isActive)
//       return res.status(401).json({ message: 'Account is not active' });
//     next();
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(401)
//       .json({ message: 'Access denied, you re not Logged In' });
//   }
// };

// export const verifySellerToken: RequestHandler = async (req, res, next) => {
//   const token =
//     typeof req.headers.authorization === 'string'
//       ? req.headers.authorization
//       : '';
//   const { JWT_SECRET } = process.env;
//   try {
//     const decoded: DecodedToken = jwt.verify(
//       token,
//       JWT_SECRET ?? 'SECRET'
//     ) as DecodedToken;
//     const sellerUser = await UserSchema.findById(decoded.id, {
//       password: 0
//     });
//     if (sellerUser === null)
//       return res.status(404).json({ message: 'No user found' });
//     if (sellerUser.rol !== userRoles.Seller)
//       return res.status(401).json({ message: 'Access denied' });
//     if (!sellerUser.isActive)
//       return res.status(401).json({ message: 'Account is not active' });
//     next();
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(401)
//       .json({ message: 'Access denied, you re not Logged In' });
//   }
// };

// export const verifyAdminToken: RequestHandler = async (req, res, next) => {
//   const token =
//     typeof req.headers.authorization === 'string'
//       ? req.headers.authorization
//       : '';
//   const { JWT_SECRET } = process.env;
//   try {
//     const decoded: DecodedToken = jwt.verify(
//       token,
//       JWT_SECRET ?? 'SECRET'
//     ) as DecodedToken;
//     const adminUser = await UserSchema.findById(decoded.id, {
//       password: 0
//     });
//     if (adminUser === null)
//       return res.status(404).json({ message: 'No user found' });
//     if (adminUser.rol !== userRoles.Admin)
//       return res.status(401).json({ message: 'Access denied' });
//     next();
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(401)
//       .json({ message: 'Access denied, you re not Logged In' });
//   }
// };

export const verifyRoles: (roles: string[]) => RequestHandler =
  (roles) => async (req: CustomRequest, res, next) => {
    const token =
      typeof req.headers.authorization === 'string'
        ? req.headers.authorization
        : '';
    const { JWT_SECRET } = process.env;
    try {
      if (token.length === 0)
        return res.status(401).json({ message: 'You need to enter a token' });
      const decoded: DecodedToken = jwt.verify(
        token,
        JWT_SECRET ?? 'SECRET'
      ) as DecodedToken;
      const user = await UserSchema.findById(decoded.id, {
        password: 0
      });
      if (user === null)
        return res.status(404).json({ message: 'No user found' });
      if (!roles.includes(user.rol))
        return res.status(401).json({ message: 'Access denied' });
      req.id = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: 'Access denied, you re not Logged In' });
    }
  };
