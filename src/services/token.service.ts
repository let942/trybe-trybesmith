import jwt from 'jsonwebtoken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'MelanciaNapolitana';

const tokenService = {
  createToken: (claims: number) => {
    const payload = { payload: claims };
    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
  },
};

export default tokenService;