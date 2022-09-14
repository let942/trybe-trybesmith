import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/products.interface';

const ProductsModel = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, name, amount };
  },

};

export default ProductsModel;