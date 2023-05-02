import { IProduct } from '@models/Product/Product';

export const paginate = (
  products: IProduct[],
  page: number,
  limit: number
): IProduct[] => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return products.slice(startIndex, endIndex);
};
