import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/users.terface';
import UserLogin from '../interfaces/userLogin.interface';
import connection from './connection';

interface ProductWithRow extends User, RowDataPacket { }

const UsersModel = {
  create: async ({ username, classe, level, password }: User): Promise<User> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return { id: result.insertId, username, classe, level, password };
  },
  getLogin: async ({ username, password }: UserLogin): Promise<User | undefined> => {
    const query = `SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`;
    const [[result]] = await connection
      .execute<ProductWithRow[]>(query, [username, password]);
    console.log(result);
    return result;
  },
  getById: async (id: number) => {
    const query = ` SELECT * FROM Trybesmith.Users
    WHERE id = ?`;
    const [[result]] = await connection
      .execute<ProductWithRow[]>(query, [id]);
    return result;
  },

};

export default UsersModel;