import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME ?? 'MernTest';

const MONGO_URL = process.env.MONGO_URL ?? `mongodb://localhost:27017`;

const connection = () =>
  MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => client.db(DB_NAME))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

export default connection;
