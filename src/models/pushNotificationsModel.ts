import connection from './connection';

export const create = (document: object) =>
  connection()
    .then((db) => db.collection('tokens').insertOne(document))
    .then((createdDocument) => createdDocument.ops[0]);

export const readAll = () => connection().then((db) => db.collection('tokens').find().toArray());

export const readOneByToken = (token: string) =>
  connection().then((db) => db.collection('tokens').findOne({ token }));
