import { Router, Request, Response } from 'express';
import { generateErrorJSON } from '../functions';
import { create, readAll } from '../models/pushNotificationsModel';

const pushNotificationsController = Router();

pushNotificationsController.post('/', async ({ body }: Request, res: Response) => {

  if (!body.token) return res.status(400).json(generateErrorJSON('Missing token'))

  try {
    const createdToken = await create(body);
    return res.status(201).json(createdToken);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json(generateErrorJSON(error.message));
  }
});

pushNotificationsController.get('/', async (req: Request, res: Response) => {
  try {
    const tokens = await readAll();
    return res.status(200).json(tokens);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json(generateErrorJSON(error.message));
  }
});

export default pushNotificationsController;
