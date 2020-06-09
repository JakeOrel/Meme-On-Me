const express = require('express');

const app = express();
const dotenv = require('dotenv');
const db = require('./controller/FetchMemes');

dotenv.config();
app.use(express.json());
app.use(express.static('public'));

const { PORT } = process.env;

// for default page load
app.get('/memes', db.getMemes);

// user specific memes
app.get('/memes/:id', db.getUserMemes);

// add memes to the default list
app.put('/memes', db.addMemes);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
