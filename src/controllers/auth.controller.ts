import {
  CustomResponseCookie,
  generateRefreshToken,
  generateToken
} from '@config/jwt.config';
import { VerifyRefreshToken } from '@middlewares/authRefresh.middleware';
import { UserSchema } from '@models/User';
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const singIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await UserSchema.findOne({ email });
    if (userFound === null)
      return res.status(404).json({ message: 'No user found' });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    if (!userFound.verified)
      return res.status(401).json({ msg: 'User not verified' });

    const matchPassword = await userFound.comparePassword(password);

    if (!matchPassword)
      return res.status(401).json({ msg: 'Invalid password' });

    // const { token, expiresIn } = generateToken(userFound._id);

    generateRefreshToken(userFound._id, res as unknown as CustomResponseCookie);
    return res.status(200).json({ message: 'Log in successfully' });
    // return res.status(200).json({ token, expiresIn });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const logOut: RequestHandler = async (_req, res) => {
  try {
    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'Log out successfully' });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const refreshToken: RequestHandler = async (req, res) => {
  const { id } = req as VerifyRefreshToken;
  try {
    if (id === undefined) throw new Error('No id provided');
    const { token, expiresIn } = generateToken(id);
    return res.status(200).json({ token, expiresIn });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const verify: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await UserSchema.findById(id);
    if (userFound === null)
      return res.status(404).json({ message: 'No user found' });
    const { token, expiresIn } = generateToken(userFound._id);
    return res.status(200).json({ token, expiresIn });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const forgotPassword: RequestHandler = async (req, res) => {
  interface RequestBody {
    email: string;
  }
  const { email } = req.body as RequestBody;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const user = await UserSchema.findOne({ email });
    if (user === null)
      return res.status(500).json({ message: 'User not found' });
    const { token, expiresIn } = generateToken(user._id);

    await user.updateOne({ resetPasswordTokenLink: token, expiresIn });
    return res.status(200).json({
      message: `Email has been sent to ${email}. Follow the instructions to reset your password`
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const resetPassword: RequestHandler = async (req, res) => {
  const { resetPasswordTokenLink, newPassword } = req.body;
  try {
    const user = await UserSchema.findOne({ resetPasswordTokenLink });
    if (user === null)
      return res.status(500).json({ message: 'User not found' });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    if (user.resetPasswordTokenLink === '')
      return res.status(500).json({ message: 'Invalid Link' });

    const encryptedPassword = await user.encryptPassword(newPassword);

    const updatedUser = {
      password: encryptedPassword,
      resetPasswordTokenLink: ''
    };

    await user.updateOne(updatedUser);
    res.status(200).json({
      message: 'Password updated! Now you can login with your new password.'
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const emailVerify: RequestHandler = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const user = await UserSchema.findOne({ emailVerificationToken: token });
    if (user === null)
      return res.status(500).json({ message: 'User not found' });
    if (user.emailVerifyTokenLink === '')
      return res.status(500).json({ message: 'Invalid Link' });
    user.emailVerifyTokenLink = '';
    await user.updateOne(user);
    res.status(200).json({
      message: 'Email verified! Now you can login with your new password.'
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const activateAccount: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    if (password === undefined)
      return res.status(500).json({ message: 'Password is required' });
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const user = await UserSchema.findById(id);
    if (user === null)
      return res.status(500).json({ message: 'User not found' });
    if (user.verified)
      return res.status(500).json({ message: 'User already verified' });

    const encryptedPassword = await user.encryptPassword(password);
    await UserSchema.findByIdAndUpdate(id, {
      password: encryptedPassword,
      verified: true
    });

    res.status(200).json({
      message: 'Account activated! Now you can login with your new password.'
    });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
