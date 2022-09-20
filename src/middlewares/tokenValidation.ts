import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import users from '../models/users';

const secret = 'MelanciaNapolitana';

function unauthorized(res: Response, message: string) {
  return res.status(401).json({ message });
}

function getTokenFromHeader(req: Request) {
  const { authorization } = req.headers;
  return authorization;
}

function tokenFailedToDecode(err: { name: string, message: string }) {
  return err.name && ['TokenExpiredError', 'JsonWebTokenError']
    .some((e) => e === err.name);
}

export default async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const token = getTokenFromHeader(req);
    if (!token) return unauthorized(res, 'Token not found');

    const decoded = jwt.verify(token, secret) as { payload: number };
    const user = await users.getById(decoded.payload);
    if (!user) return unauthorized(res, 'Erro ao procurar usuário do token.');

    res.locals = { userId: user.id };
    next();
  } catch (err: any) {
    if (tokenFailedToDecode(err)) {
      return unauthorized(res, 'Invalid token');
    }
    return res.status(401).json({ message: err.message });
  }
}
