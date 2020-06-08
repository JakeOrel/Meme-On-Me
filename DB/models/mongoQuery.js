const db = require('../Mongo.js');

exports.userMemes = (name, callback) => {
  db.Memes.find({ user: name }, 'memes').exec(callback);
};

exports.createUser = (name, callback) => {
  db.Memes.create({ user: name }, callback);
};

exports.getMemes = (callback) => {
  db.Memes.find({}).exec(callback);
};

exports.addMemes = (meme, line1, line2, callback) => {
  const topText = line1 || '';
  const bottomText = line2 || '';
  db.Memes.updateOne({ _id: '5ede99ee283005d019668284' }, {
    $push: {
      memes: {
        img: meme,
        line1: topText,
        line2: bottomText,
      },
    },
  }, callback);
};
