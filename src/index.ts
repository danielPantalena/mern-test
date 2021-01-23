import * as express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hi');
});

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}`));
