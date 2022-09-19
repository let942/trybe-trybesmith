import { Request, Response } from 'express';
import loginService from '../services/login.service';

const LoginController = {

  getLogin: async (req: Request, res: Response): Promise<Response> => {
    const token = await loginService.getLogin(req.body);
    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(200).json({ token });
  },
};

export default LoginController;