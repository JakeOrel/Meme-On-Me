const reddit = require('../models/searchImg');

exports.loadPage = (req, res) => {
  const { searchTerm, sortBy, searchLimit } = req.body;

  reddit.loadPage(searchTerm, searchLimit, sortBy)
    .then((data) => {
      const entries = data.data.data;
      res.send(entries.memes);
    })
    .catch((err) => res.send(err));
};
