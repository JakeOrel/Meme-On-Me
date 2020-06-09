const db = require('../../DB/models/mongoQuery');

// user specific memes
exports.getUserMemes = (req, res) => {
  const { name } = req.body || 'anonymous';

  db.userMemes(name, (err, data) => {
    if (err) {
      res.send(404);
    } else {
      res.send(data);
    }
  });
};

// create a user
exports.createUser = (req, res) => {
  const { name } = req.body;

  db.createUser(name, (err, data) => {
    if (err) {
      res.send(500);
    } else {
      res.send(data);
    }
  });
};

// default memes
exports.getMemes = (req, res) => {
  db.getMemes((err, data) => {
    if (err) {
      res.send(404);
    } else {
      res.send(data[0].memes);
    }
  });
};

// add to default memes
exports.addMemes = (req, res) => {
  const {
    memes, line1, line2, color,
  } = req.body;

  db.addMemes(memes, line1, line2, color, (err, data) => {
    if (err) {
      res.send(500);
    } else {
      res.send(data);
    }
  });
};

exports.getTemplates = (req, res) => {
  db.getMemes((err, data) => {
    if (err) {
      res.send(404);
    } else {
      const templates = [];
      for (let i = 0; i <= 9; i += 1) {
        templates.push(data[0].memes[i]);
      }
      res.send(templates);
    }
  });
}