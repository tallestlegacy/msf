import { MongoClient } from 'mongodb';

//let uri = process.env.DB_URI;
let uri =
	'mongodb+srv://root:denri@cluster0.snvzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

let dbName = 'msf';

let cachedClient = null;
let cachedDb = null;

if (!uri) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!dbName) {
	throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}

	const client = await MongoClient.connect(uri, {
		//useNewUrlParser: true,
		//useUnifiedTopology: true
	});

	const db = await client.db(dbName);

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}

export const getCollection = async (collectionName) => {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const collection = db.collection(collectionName || '');
	return collection;
};
