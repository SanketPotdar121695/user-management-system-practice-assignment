const cors = require('cors');
const express = require('express');
const { PORT, connection } = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Routes...
app.get('/', (req, res) => {
  return res
    .status(200)
    .send(
      '<h1 style="text-align: center;">Welcome to the User Management System API !!!</h1>'
    );
});

app.listen(PORT, connection);
