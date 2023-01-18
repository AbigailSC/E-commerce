import { RequestHandler } from 'express';
import { users as UserSchema } from '@models/Users';
import { IUsers } from '@models/Users/users';

export const createUser: RequestHandler<IUsers> = async (req, res) => {
  const { name, address, phone, image, role, isActive, password }: IUsers =
    req.body;
  try {
    const newUser: IUsers = new UserSchema({
      name,
      address,
      phone,
      image,
      role,
      isActive,
      password
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const getUsers: RequestHandler = async (_req, res) => {
  try {
    const allUsers = await UserSchema.find({ isActive: true });
    res.json(allUsers);
  } catch (error) {
    console.error(error);
  }
};
