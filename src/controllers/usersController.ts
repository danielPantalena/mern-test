import { Router, Request, Response } from 'express';
import { generateErrorJSON } from '../functions';
import { readOneByName } from '../models/accountsModel';

const usersController = Router();

usersController.get('/:name', async ({ params }: Request, res: Response) => {
  try {
    const account = await readOneByName(params.name);
    if (!account) return res.status(404).json(generateErrorJSON('Account not found'))
    return res.status(200).json(account);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json(generateErrorJSON(error.message));
  }
});

export default usersController;
