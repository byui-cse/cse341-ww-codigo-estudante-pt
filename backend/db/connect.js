const dotenv = require('dotenv');
dotenv.config(); // This allows the file to read MONGODB_URI from the .env file
const MongoClient = require('mongodb').MongoClient; // Imports the MongoDB driver

let _db;

// This function starts the connection
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!'); // Prevents double-connecting
    return callback(null, _db);
  }
  // This uses the variable name from .env file
  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

// This function lets other files use the existing connection
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized'); // Errors out if you try to get data before connecting
  }
  return _db;
};

module.exports = {initDb,getDb,};