import { AdminSchema } from '@models/Admin';
import { CitySchema } from '@models/City';
import { CountrySchema } from '@models/Country';
import { RolSchema } from '@models/Rol';
import { UserSchema } from '@models/User';
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const getAdmins: RequestHandler = async (_req, res) => {
  try {
    const adminsDb = await AdminSchema.find();
    if (adminsDb === null)
      return res.status(204).json({ message: 'No content' });
    const adminsData = await Promise.all(
      adminsDb.map(async (admin) => {
        const city = await CitySchema.findById(admin.cityId);
        const country = await CountrySchema.findById(admin.countryId);
        return {
          ...admin.toJSON(),
          cityId: city?.toJSON(),
          countryId: country?.toJSON()
        };
      })
    );
    return res.status(200).json(adminsData);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const getAdminById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const adminDb = await AdminSchema.findById(id);
    if (adminDb === null)
      return res.status(204).json({ message: 'No admin found' });

    const city = await CitySchema.findById(adminDb.cityId);
    const country = await CountrySchema.findById(adminDb.countryId);

    return res.status(200).json({
      ...adminDb.toJSON(),
      city: city?.toJSON(),
      country: country?.toJSON()
    });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const createAdmin: RequestHandler = async (req, res) => {
  const { name, lastname, phone, email, document, countryId, cityId, image } =
    req.body;
  try {
    const adminDuplicate = await AdminSchema.findOne({ email });
    if (adminDuplicate !== null)
      return res.status(400).json({ message: 'Admin already exists' });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newAdmin = new AdminSchema({
      name,
      lastname,
      phone,
      email,
      document,
      image,
      countryId,
      cityId
    });
    await newAdmin.save();

    const rol = await RolSchema.findOne({ name: 'Admin' });

    const newUser = new UserSchema({
      email,
      rol: rol?.name
    });
    await newUser.save();

    return res.status(201).json({ message: 'Admin created' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const updateAdmin: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, phone, document, countryId, cityId, image } =
    req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    await AdminSchema.findByIdAndUpdate(id, {
      name,
      lastname,
      phone,
      document,
      countryId,
      cityId,
      image
    });
    res.status(200).json({ message: 'Admin updated' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const deleteAdmin: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await AdminSchema.findByIdAndDelete(id);
    if (admin === null)
      return res.status(204).json({ message: 'Admin not found' });
    await UserSchema.findOneAndDelete({ email: admin.email });
    return res.status(200).json({ message: 'Admin deleted' });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};
