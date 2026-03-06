const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connect'); 

const app = express();
const port = process.env.PORT || 8080; 

app.use(cors()); 
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err); 
  } else {
    // Start the server if the database connects successfully
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`); // Success message
  }
});