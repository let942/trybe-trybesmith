import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/orders.interface';
import OrderDTO from '../interfaces/orderDTO.interface';

interface ProductWithRow extends OrderDTO, RowDataPacket { }

const ProductsModel = {

  getAll: async (): Promise<Order[]> => {
    const [results] = await connection
      .execute<ProductWithRow[]>(`SELECT o.id, o.userId, p.id AS productId
      FROM Trybesmith.Orders AS o
      INNER JOIN  Trybesmith.Products AS p
      ON p.orderId = o.id;`);
    const orders = results.reduce((acc: { [key: number]: Order }, curr: ProductWithRow) => {
      if (!acc[curr.id]) {
        acc[curr.id] = {
          id: curr.id,
          userId: curr.userId,
          productsIds: [],
        };
      }
      acc[curr.id].productsIds.push(curr.productId);
      return acc;
    }, {});
    return Object.values(orders).sort((a: Order, b: Order) => a.userId - b.userId);
  },

  create: async (userId: number): Promise<Order> => {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
    const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
    return { id: result.insertId, userId, productsIds: [] };
  },
};

export default ProductsModel;