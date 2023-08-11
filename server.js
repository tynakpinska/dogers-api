const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
  res.send("logging in");
});

app.post('/register', (req, res) => {
  res.send("registering");
});

app.listen(3001, () => console.log('App is running on http://localhost:3001'));
