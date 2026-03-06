const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  // make sure 'user' matches your Compass name
  const result = await mongodb.getDb().db().collection('user').find();
  
  // Convert the database cursor into a readable array
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json'); //
    res.status(200).json(lists[0]); // Return the first professional object found
  });
};

module.exports = { getData }; 