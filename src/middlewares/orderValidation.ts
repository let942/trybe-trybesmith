import { Request, Response, NextFunction } from 'express';

export default function orderValidationProductId(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if ((typeof (productsIds) !== 'object')) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  productsIds.forEach((productId: number) => {
    if (typeof (productId) !== 'number') {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
  });

  next();
}
