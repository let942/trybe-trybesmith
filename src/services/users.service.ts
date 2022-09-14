import User from '../interfaces/users.terface';
import UserModel from '../models/users';

const UsersService = {
  create: async ({ username, classe, level, password }: User): Promise<User> => {
    const user = await UserModel.create({ username, classe, level, password });
    return user;
  },
};

export default UsersService;