import { Request, Response, NextFunction } from 'express';
import { readOneByToken } from '../models/pushNotificationsModel';
import { generateErrorJSON } from '../functions';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { token, message } = req.body;
  if (!token || !message) return res.status(400).json(generateErrorJSON('Missing token or message'));

  try {
    const document = await readOneByToken(token);
    if (document) return res.status(409).json(generateErrorJSON('This token already exists'));
    return next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json(generateErrorJSON(error.message));
  }
  return next();
};

export default validateToken;
