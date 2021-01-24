import connection from './connection';

export const create = (document: object) =>
  connection()
    .then((db) => db.collection('accounts').insertOne(document))
    .then((createdDoc) => createdDoc.ops[0]);

export const readOneByName = (name: string) =>
  connection().then((db) => db.collection('accounts').findOne({ name }));
