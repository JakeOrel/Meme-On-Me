const express = require('express');

const app = express();
const dotenv = require('dotenv');
const db = require('./controller/FetchMemes');

dotenv.config();
app.use(express.json());
app.use(express.static('public'));

const { PORT } = process.env;

app.get('/memes', db.getMemes);

app.get('/memes', db.getUserMemes);

app.put('/memes', db.addMemes);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
