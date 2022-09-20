import Order from '../interfaces/orders.interface';
import OrderModel from '../models/order';
import ProductsModel from '../models/products';

const OrdersService = {

  getAll: async (): Promise<Order[]> => {
    const orders = await OrderModel.getAll();
    return orders;
  },

  create: async ({ userId, productsIds }: Order): Promise<Order> => {
    console.log({ userId, productsIds });
    const order = await OrderModel.create(userId);
    const orderId = order.id || 0; // TODO: Remover esta gambiarra. Obrigado
    const updatePromises = productsIds
      .map((id: number) => ProductsModel.update(id, orderId));
    await Promise.all(updatePromises);
    order.productsIds = productsIds;
    return order;
  },
};

export default OrdersService;