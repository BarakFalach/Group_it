
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 //single field : username (can add more fields)
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true, // automatcliy create a field of when the user created
});

const User = mongoose.model(/*The name we are gonna use*/'User', userSchema);

module.exports = User;
