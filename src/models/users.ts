import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.terface';
import connection from './connection';

const UsersModel = {
  create: async ({ username, classe, level, password }: User): Promise<User> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return { id: result.insertId, username, classe, level, password };
  },

};

export default UsersModel;