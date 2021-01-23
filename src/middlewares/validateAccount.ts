import { Request, Response, NextFunction } from 'express';
import { readOneByName } from '../models/accountsModel';

const generateErrorJson = (message) => ({ error: true, message });

export const validateAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) res.status(400).json(generateErrorJson('Missing name filed at body request'));

  try {
    const account = await readOneByName(name);
    if (account)
      return res
        .status(409)
        .json(generateErrorJson('This account already exists. Please try other name'));
    return next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json(generateErrorJson(error.message || 'Opss... something went wrong'));
  }
  return next();
};
