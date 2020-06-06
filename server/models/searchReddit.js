const axios = require('axios');

exports.loadPage = (searchTerm, searchLimit, sortBy) => axios.get(
  `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`,
);
