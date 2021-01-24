import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as admin from 'firebase-admin';
import { adminsController, usersController, pushNotificationsController } from './controllers';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://danielpantalena-mern-test.firebaseio.com'
});

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/admin', adminsController);
app.use('/notification', pushNotificationsController);
app.use('/', usersController);

app.listen(PORT, () => console.log(`Listening at PORT:${PORT}`));
