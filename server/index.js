const express = require('express');

const app = express();
const dotenv = require('dotenv');
const reddit = require('./controller/FetchReddit');

dotenv.config();
app.use(express.json());
app.use(express.static('public'));

const { PORT } = process.env;

app.get('/home', reddit.loadPage);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
