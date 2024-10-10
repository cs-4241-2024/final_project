import {MongoClient, ServerApiVersion} from "mongodb"
// import {mongoURI} from "./private.js"

const DEBUG_MODE = true

export class MongoCollection
{
  constructor(name, docType)
  {
    this.name = name                /* Name of collection */
    this.docType = docType          /* Class of documents */
  }
}

export class MongoDatabase
{
  constructor(name, collections)
  {
    this.name = name                /* Name of database */
    this.collections = collections  /* List of collections */
  }
}

export class UserLoginData
{
  constructor(username, password, access)
  {
    this.username = username;       /* Username */
    this.password = password;       /* Password */
    this.access = access;           /* Access level (TODO: Enum?) */
  }
}

export class InventoryData
{
  constructor(name, quantity, unit, location, price, lastupdated, notes)
  {
    this.name = name;               /* Item name */
    this.quantity = quantity;       /* Available stock */
    this.unit = unit;               /* Quantity unit */
    this.location = location;       /* Stockroom location */
    this.price = price;             /* Price per unit */
    this.lastupdated = lastupdated; /* Date last modified */
    this.notes = notes;             /* Additional notes */
  }
}

const client = new MongoClient
(
  `mongodb+srv://${process.env.dbu}:${process.env.dbpw}@cs4241-a3.pgu2a.mongodb.net/?retryWrites=true&w=majority&appName=CS4241-A3`,
  {
    serverApi:
    {
      version: ServerApiVersion.v1,
      strict: true,
      depreciationErrors: true
    }
  }
);

export const Database = new MongoDatabase
(
  "stockroom-database",
  [
    /* DB for user logins */
    new MongoCollection
    (
      "user-logins",
      UserLoginData
    ),

    /* Production DB for stockroom inventory */
    new MongoCollection
    (
      "inventory",
      InventoryData
    ),

    /* Development DB for stockroom inventory */
    new MongoCollection
    (
      "dev-inventory",
      InventoryData
    )
  ]
);

/**
 * Create a new collection in an existing database.
 * 
 * @param {MongoCollection} collection Collection object to add.
 */
export async function MongoCreateCollection(collection)
{
  try
  {
    const mongoDatabase = client.db(Database.name);
    const result = await mongoDatabase.createCollection(collection.name);

    Database.collections.push(collection);

    if (DEBUG_MODE === true)
    {
      console.log(`DB collection "${result.collectionName}" created in database "${Database.name}"`);
    }
  }
  catch (e)
  {
    console.log(`ERROR creating collection in ${Database.name}: ${e.message}`);
  }
}

/**
 * Create a new document in an existing collection.
 * 
 * @param {*} document Document object to create (class __Data).
 * @param {MongoCollection} collectionName Collection to add document to. 
 */
export async function MongoCreateDocument(document, collectionName)
{
  try
  {
    const collection = Database.collections.find((c) => (c.name === collectionName));
    if (collection === undefined)
    {
      throw new Error(`Collection "${collectionName}" not found.`);
    }

    if (!(document instanceof collection.docType))
    {
      throw new Error("Document type does not match required collection document type.");
    }

    const mongoDatabase = client.db(Database.name);
    const mongoCollection = mongoDatabase.collection(collection.name);

    const result = await mongoCollection.insertOne(document);

    if (DEBUG_MODE === true)
    {
      console.log(`DB document "${result.insertedId}" created in collection "${collection.name}"`);
    }
  }
  catch (e)
  {
    console.log(`ERROR creating document in ${collectionName}: ${e.message}`);
  }
}

/**
 * Update an existing document in an existing collection.
 * If document does not exist, it will be upserted.
 * 
 * @param {*} document Document object to update (class __Data).
 * @param {MongoCollection} collectionName Collection to update document in. 
 */
export async function MongoUpdateDocuments(document, collectionName)
{
  try
  {
    const collection = Database.collections.find((c) => (c.name === collectionName));
    if (collection === undefined)
    {
      throw new Error(`Collection "${collectionName}" not found.`);
    }

    if (!(document instanceof collection.docType))
    {
      throw new Error("Document type does not match required collection document type.");
    }

    const mongoDatabase = client.db(Database.name);
    const mongoCollection = mongoDatabase.collection(collection.name);

    const docKeys = Object.keys(document);
    const comparator = docKeys[0];

    const filter = {[comparator]: document[comparator]};
    const options = {upsert: true};

    const update = {$set: document}

    const result = await mongoCollection.updateMany(filter, update, options);

    if (DEBUG_MODE === true)
    {
      console.log(`DB document(s) with property "${document[comparator]}" have been → Modified: ${result.modifiedCount}, Upserted: ${result.upsertedCount} → in collection "${collection.name}"`);
    }
  }
  catch (e)
  {
    console.log(`ERROR updating document(s) in ${collectionName}: ${e.message}`);
  }
}

/**
 * Update an existing document in an existing collection.
 * Documents to update are found using a filter, properties to update are configured using an object.
 * If document does not exist, it will not be upserted.
 * 
 * @param {*} filter Filter for documents to update.
 * @param {*} update Declare what properties to update and their values.
 * @param {MongoCollection} collectionName Collection to update document in. 
 */
export async function MongoUpdateDocumentsFilter(filter, update, collectionName)
{
  try
  {
    const collection = Database.collections.find((c) => (c.name === collectionName));
    if (collection === undefined)
    {
      throw new Error(`Collection "${collectionName}" not found.`);
    }

    const mongoDatabase = client.db(Database.name);
    const mongoCollection = mongoDatabase.collection(collection.name);

    const updates = {$set: update}
    const options = {upsert: false};

    const result = await mongoCollection.updateMany(filter, updates, options);

    if (DEBUG_MODE === true)
    {
      console.log(`DB document(s) have been → Modified: ${result.modifiedCount} → in collection "${collection.name}"`);
    }
  }
  catch (e)
  {
    console.log(`ERROR updating document(s) in ${collectionName}: ${e.message}`);
  }
}

/**
 * Delete a document from an existing collection.
 * 
 * @param {*} filter Document properties to filter search by.
 * @param {MongoCollection} collectionName Collection to delete document from. 
 */
export async function MongoDeleteDocuments(filter, collectionName)
{
  try
  {
    const collection = Database.collections.find((c) => (c.name === collectionName));
    if (collection === undefined)
    {
      throw new Error(`Collection "${collectionName}" not found.`);
    }

    const mongoDatabase = client.db(Database.name);
    const mongoCollection = mongoDatabase.collection(collection.name);

    const result = await mongoCollection.deleteMany(filter);

    if (DEBUG_MODE === true)
    {
      console.log(`Deleted ${result.deletedCount} document(s) from collection "${collectionName}"`);
    }
  }
  catch (e)
  {
    console.log(`ERROR deleting document(s) in ${collectionName}: ${e.message}`);
  }
}

/**
 * Find a document in an existing collection.
 * 
 * @param {*} filter Document properties to filter search by.
 * @param {MongoCollection} collectionName Collection to find document in. 
 */
export async function MongoFindDocuments(filter, collectionName)
{
  try
  {
    const collection = Database.collections.find((c) => (c.name === collectionName));
    if (collection === undefined)
    {
      throw new Error(`Collection "${collectionName}" not found.`);
    }

    const mongoDatabase = client.db(Database.name);
    const mongoCollection = mongoDatabase.collection(collection.name);

    const result = await mongoCollection.find(filter).toArray();

    if (DEBUG_MODE === true)
    {
      console.log(`Found ${result.length} document(s) from collection "${collectionName}"`);
    }

    return result;
  }
  catch (e)
  {
    console.log(`ERROR finding document(s) in ${collectionName}: ${e.message}`);
    return undefined;
  }
}

/**
 * Closes connection to database.
 */
export async function MongoClose()
{
  await client.close();
}
