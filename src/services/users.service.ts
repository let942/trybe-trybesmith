import User from '../interfaces/users.terface';
import UserModel from '../models/users';
import tokenService from './token.service';

const UsersService = {

  create: async ({ username, classe, level, password }: User): Promise<string> => {
    await UserModel.create({ username, classe, level, password });
    const token = await tokenService.createToken(username);
    return token;
  },
};

export default UsersService;