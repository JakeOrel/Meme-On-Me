const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('open', () => console.log('connected to mongo'));

const { Schema } = mongoose;

const memeSchema = new Schema({
  memes: [{
    img: String,
    line1: String,
    line2: String,
  }],
});

const Memes = mongoose.model('Memes', memeSchema);

// const baseMeme = new Memes({
//   memes: [{
//     img: 'https://mvpmemes.s3.us-east-2.amazonaws.com/fuze.jpg',
//     line1: '',
//     line2: '',
//   }],
// });

// baseMeme.save((err) => {
//   if (err) {
//     console.log('couldnt save');
//   }
//   console.log('saved');
// });

// Memes.find((err, res) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(res);
// });

module.exports = {
  Memes,
};
