import { Router, Request, Response } from 'express';
import { validateAccount } from '../middlewares/validateAccount';
import {
  create,
  readAll,
  readOneById,
  readOneByName,
  updateById,
  deleteById,
} from '../models/accountsModel';

const accountsController = Router();

accountsController.post('/', validateAccount, async ({ body }: Request, res: Response) => {
  try {
    const createdAccount = await create(body);
    res.status(201).json(createdAccount);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: 'Something wrong...' });
  }
});

export default accountsController;
