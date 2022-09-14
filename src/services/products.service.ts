import Product from '../interfaces/products.interface';
import ProductsModel from '../models/products';

const ProductsService = {

  create: async ({ name, amount }: Product): Promise<Product> => {
    const product = await ProductsModel.create({ name, amount });
    return product;
  },

};

export default ProductsService;