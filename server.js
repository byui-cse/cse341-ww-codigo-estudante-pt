const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});