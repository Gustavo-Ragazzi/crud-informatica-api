const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);

app.listen(8000, () => {
  console.log('App listening on port 8000!');
});
