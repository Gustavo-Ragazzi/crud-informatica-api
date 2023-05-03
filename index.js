const express = require('express');
const cors = require('cors'); // Importe o módulo 'cors'
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors()); // Adicione o middleware 'cors'
app.use('/api', routes);

app.listen(8000, () => {
  console.log('App listening on port 8000!');
});