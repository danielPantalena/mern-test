import { Request, Response, NextFunction } from 'express';
import { readOneByName } from '../models/accountsModel';
import { generateErrorJSON } from '../functions'

export const validateAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) res.status(400).json(generateErrorJSON('Missing name field at body request'));

  try {
    const account = await readOneByName(name);
    if (account)
      return res
        .status(409)
        .json(generateErrorJSON('This account already exists. Please try other name'));
    return next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json(generateErrorJSON(error.message));
  }
  return next();
};
