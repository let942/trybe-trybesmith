import Order from '../interfaces/orders.interface';
import OrderModel from '../models/order';

const OrdersService = {

  getAll: async (): Promise<Order[]> => {
    const orders = await OrderModel.getAll();
    return orders;
  },
};

export default OrdersService;