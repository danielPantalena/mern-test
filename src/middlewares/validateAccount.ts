import { Request, Response, NextFunction } from 'express';

export const validateAccount = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) res.status(400).json({ error: true, message: 'Missing name field at req body' });
  return next();
};
