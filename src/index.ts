import * as express from 'express';
import * as dotenv from 'dotenv';
import accountsController from './controllers/accountsController';
import usersController from './controllers/usersController';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.use('/admin', accountsController);
app.use('/', usersController);

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}`));
