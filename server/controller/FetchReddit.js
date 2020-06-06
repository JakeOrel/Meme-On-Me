const reddit = require('../models/searchReddit');

exports.loadPage = (req, res) => {
  const { searchTerm, sortBy, searchLimit } = req.body;

  reddit.loadPage(searchTerm, searchLimit, sortBy)
    .then((data) => res.send(data.data.data.children))
    .catch((err) => res.send(err));
};
