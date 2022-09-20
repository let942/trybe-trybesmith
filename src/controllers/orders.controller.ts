import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const OrdersController = {

  getAll: async (req: Request, res: Response): Promise<Response> => {
    const orders = await ordersService.getAll();
    return res.status(200).json(orders);
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    const { userId } = res.locals;
    const order = await ordersService.create({ productsIds: req.body.productsIds, userId });
    return res.status(201).json(order);
  },

};

export default OrdersController;