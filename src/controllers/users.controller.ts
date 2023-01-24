import { RequestHandler } from 'express';
import { users as UserSchema } from '@models/Users';
import { IUsers } from '@models/Users/users';

export const createUser: RequestHandler<IUsers> = async (req, res) => {
  const { name, address, phone, email, image, role, password }: IUsers =
    req.body;
  try {
    const newUser: IUsers = new UserSchema({
      name,
      address,
      phone,
      email,
      image,
      role,
      isActive: true,
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

    allUsers.length > 0
      ? res.json(allUsers)
      : res.send({ msg_mesage: 'No users found' });
  } catch (error) {
    console.error(error);
  }
};

export const getUserById: RequestHandler = async (_req, res) => {
  const { idUser } = _req.params;
  try {
    const user = await UserSchema.findById(idUser);
    user !== null
      ? res.json(user)
      : res.send({ msg_mesage: 'User not found!' });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser: RequestHandler<IUsers> = async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email, image, password }: IUsers = req.body;
  const updateUser = await UserSchema.findByIdAndUpdate(id, {
    name,
    address,
    phone,
    email,
    image,
    password
  });
  try {
    if (updateUser != null) {
      res.status(200).json(updateUser);
    } else {
      res.status(500).json({ msg_mesage: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const deleteUser: RequestHandler = async (_req, res) => {
  const { id } = _req.params;
  try {
    const deleteUser = await UserSchema.findByIdAndUpdate(id, {
      isActive: false
    });
    deleteUser !== null
      ? res.status(200).json(deleteUser)
      : res.send({ msg_message: 'User not found' });
  } catch (error) {
    console.error(error);
  }
};

export const restoreUser: RequestHandler = async (_req, res) => {
  const { id } = _req.params;
  try {
    const restoreUser = await UserSchema.findByIdAndUpdate(id, {
      isActive: true
    });
    console.log(restoreUser, 'asdasdasdasdsad');
    restoreUser !== null
      ? res.status(200).json(restoreUser)
      : res.send({ msg_message: 'User not found' });
  } catch (error) {
    console.error(error);
  }
};
