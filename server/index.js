const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config();

const { PORT } = process.env;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
