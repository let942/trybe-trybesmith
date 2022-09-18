import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const OrdersController = {

  getAll: async (req: Request, res: Response): Promise<Response> => {
    const orders = await ordersService.getAll();
    return res.status(200).json(orders);
  },
};

export default OrdersController;