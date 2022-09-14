import { Request, Response } from 'express';
import productsService from '../services/products.service';

const ProductsController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const product = await productsService.create(req.body);
    return res.status(201).json(product);
  },
  getAll: async (req: Request, res: Response): Promise<Response> => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  },
};

export default ProductsController;