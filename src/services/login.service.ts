import UserLogin from '../interfaces/userLogin.interface';
import UserModel from '../models/users';
import tokenService from './token.service';

const UsersService = {

  getLogin: async ({ username, password }: UserLogin): Promise<string | null> => {
    const user = await UserModel.getLogin({ username, password });
    if (user && user.id) {
      const token = await tokenService.createToken(user.id);
      return token;
    }
    return null;
  },
};

export default UsersService;
