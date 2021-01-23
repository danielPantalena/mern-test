import { ObjectId } from 'mongodb';
import connection from './connection';

export const create = (document: object) =>
  connection()
    .then((db) => db.collection('accounts').insertOne(document))
    .then((createdDoc) => createdDoc.ops[0]);

export const readAll = () => connection().then((db) => db.collection('accounts').find().toArray());

export const readOneById = (id: string) => {
  if (!ObjectId.isValid(id)) return null;
  return connection().then((db) => db.collection('accounts').findOne(new ObjectId(id)));
};

export const readOneByName = (name: string) =>
  connection().then((db) => db.collection('accounts').findOne({ name }));

export const updateById = (id: string, update: object) => {
  if (!ObjectId.isValid(id)) return null;
  return connection().then((db) =>
    db.collection('accounts').updateOne({ _id: new ObjectId(id) }, { $set: update }),
  );
};

export const deleteById = (id: string) => {
  if (!ObjectId.isValid(id)) return null;
  return connection()
    .then((db) => db.collection('accounts').findOneAndDelete({ _id: new ObjectId(id) }))
    .then((result) => result.value);
};
