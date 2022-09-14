import { Request, Response } from 'express';
import usersService from '../services/products.service';

const UsersController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const user = await usersService.create(req.body);
    return res.status(201).json(user);
  },
};

export default UsersController;