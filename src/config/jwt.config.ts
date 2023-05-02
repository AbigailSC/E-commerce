import { CookieOptions } from 'express';
import jwt from 'jsonwebtoken';

interface GenerateToken {
  token: string;
  expiresIn: number;
}

export interface CustomResponseCookie extends Response {
  cookie: (name: string, value: string, options?: CookieOptions) => this;
}

export const generateToken = (id: string): GenerateToken => {
  try {
    const expiresIn = 60 * 15; // 15 minutes
    const token = jwt.sign({ id }, process.env.JWT_SECRET ?? 'SECRET', {
      expiresIn
    });
    return { token, expiresIn };
  } catch (error) {
    console.log(error);
    throw new Error('Error generating token');
  }
};

export const generateRefreshToken = (
  id: string,
  res: CustomResponseCookie
): void => {
  const expiresIn = 60 * 60 * 24 * 7; // 7 days
  const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH ?? 'REFRESH', {
    expiresIn
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: expiresIn * 1000,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + expiresIn * 1000)
  });
};
