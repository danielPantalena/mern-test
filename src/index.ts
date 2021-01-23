import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import adminsController from './controllers/adminsController';
import usersController from './controllers/usersController';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());
app.use(cors())

app.use('/admin', adminsController);
app.use('/', usersController);

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}`));
