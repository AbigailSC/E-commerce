import { CartSchema } from '@models/Cart';
import { CitySchema } from '@models/City';
import { ClientSchema } from '@models/Client';
import { CountrySchema } from '@models/Country';
import { RolSchema } from '@models/Rol';
import { UserSchema } from '@models/User';
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { sendEmail } from '@config/nodemailer.config';
import { getActivationTemplate } from '@utils/templates';

export const getClients: RequestHandler = async (_req, res) => {
  try {
    const clientsDb = await ClientSchema.find();
    if (clientsDb === null)
      return res.status(204).json({ message: 'No content' });
    const clientsData = await Promise.all(
      clientsDb.map(async (client) => {
        const cart = await CartSchema.find({
          clientId: client._id
        });
        const city = await CitySchema.findById(client.cityId);
        const country = await CountrySchema.findById(client.countryId);
        return {
          ...client.toJSON(),
          cityId: city?.toJSON(),
          countryId: country?.toJSON(),
          cart
        };
      })
    );
    return res.status(200).json(clientsData);
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const getClient: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const clientDb = await ClientSchema.findById(id);
    if (clientDb === null)
      return res.status(204).json({ message: 'No client found' });

    const cart = await CartSchema.find({
      clientId: clientDb._id
    });
    const city = await CitySchema.findById(clientDb.cityId);
    const country = await CountrySchema.findById(clientDb.countryId);

    return res.status(200).json({
      ...clientDb.toJSON(),
      cityId: city?.toJSON(),
      countryId: country?.toJSON(),
      cart
    });
  } catch (error) {
    return res.status(500).json({ message: { error } });
  }
};

export const createClient: RequestHandler = async (req, res) => {
  const { name, lastname, address, phone, email, countryId, cityId, image } =
    req.body;
  try {
    const clientDuplicate = await ClientSchema.findOne({ email });
    if (clientDuplicate !== null)
      return res.status(400).json({ message: 'Client already exists' });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newClient = new ClientSchema({
      name,
      lastname,
      address,
      phone,
      email,
      countryId,
      cityId,
      image
    });
    await newClient.save();

    const rol = await RolSchema.findOne({ name: 'Client' });

    const newUser = new UserSchema({
      email,
      rol: rol?.name
    });
    await newUser.save();
    await sendEmail(
      'belen-clemente@hotmail.com',
      'subject',
      getActivationTemplate(newUser.emailVerifyTokenLink)
    );
    res.status(201).json({ message: 'Client created' });
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
};

export const updateClient: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, address, phone, countryId, cityId, image } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    await ClientSchema.findByIdAndUpdate(id, {
      name,
      lastname,
      address,
      phone,
      countryId,
      cityId,
      image
    });
    res.status(200).json({ message: 'Client updated' });
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
};

export const deleteClient: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await ClientSchema.findByIdAndDelete(id);
    if (client === null)
      return res.status(400).json({ message: 'Client not found' });
    await UserSchema.findOneAndDelete({ email: client?.email });
    res.status(200).json({ message: 'Client deleted' });
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
};
