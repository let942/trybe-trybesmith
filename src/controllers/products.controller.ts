import { Request, Response } from 'express';
import productsService from '../services/products.service';

const ProductsController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const product = await productsService.create(req.body);
    return res.status(201).json(product);
  },
};

export default ProductsController;