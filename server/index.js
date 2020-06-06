const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.static('public'));

const { PORT } = process.env;


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
