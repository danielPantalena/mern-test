import { Router, Request, Response } from 'express';
import { validateAccount } from '../middlewares/validateAccount';
import { generateErrorJSON } from '../functions';
import { create } from '../models/accountsModel';

const adminsController = Router();

adminsController.post('/', validateAccount, async ({ body }: Request, res: Response) => {
  try {
    const createdAccount = await create(body);
    return res.status(201).json(createdAccount);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json(generateErrorJSON(error.message));
  }
});

export default adminsController;
