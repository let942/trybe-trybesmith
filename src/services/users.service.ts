import User from '../interfaces/users.terface';
import UserModel from '../models/users';
import tokenService from './token.service';

const UsersService = {

  create: async ({ username, classe, level, password }: User): Promise<string | null> => {
    const user = await UserModel.create({ username, classe, level, password });
    if (user && user.id) {
      const token = await tokenService.createToken(user.id);
      return token;
    }
    return null;
  },
};

export default UsersService;