import { Request, Response, NextFunction } from 'express';

export function userValidationUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if ((typeof (username) !== 'string')) {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length <= 2) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
}

export function userValidationClasse(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).json({ message: '"classe" is required' });
  }
  if ((typeof (classe) !== 'string')) {
    return res.status(422).json({ message: '"classe" must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
}

function isNotANumber(value: unknown): boolean {
  return (typeof (value) !== 'number');
}

export function userValidationLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  if (!level && isNotANumber(level)) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (isNotANumber(level)) {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
}

export function userValidationPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if ((typeof (password) !== 'string')) {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
}