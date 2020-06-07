const axios = require('axios');

exports.loadPage = () => axios.get(
  'https://api.imgflip.com/get_memes',
);
