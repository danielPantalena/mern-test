import * as express from 'express';
import * as dotenv from 'dotenv';
import accountsController from './controllers/accountsController';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.use('/admin', accountsController);

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}`));
