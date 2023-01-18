import { RequestHandler } from 'express';
// import { Product } from '../models/Products/index';

export const postProducts: RequestHandler = (req, res) => {
  void (async () => {
    console.log(req.body);
    return res;
  })();
};

// export const postProducts: RequestHandler = (req, res) => {
//   void (async () => {
//     const name = req.body.name;
//     const description = req.body.description;
//     const price = req.body.price;
//     const stock = req.body.stock;
//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       stock,
//       isActived: true
//     });

//     newProduct.save().catch((err) => {
//       console.log(err);
//     });

//     return res.json(newProduct);
//   })();
// };
