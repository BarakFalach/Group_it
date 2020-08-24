
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    //single field : username (can add more fields)
    username:{type: String,require: true},
    description:{type: String,require: true},
    strength:{type: Number,require: true},
    date:{type: Date,require: true}
    //Add prior friends field 
}, {
    timestamps: true, // automatcliy create a field of when the user created
});

const Exercise = mongoose.model(/*The name we are gonna suer*/'Exercise',exerciseSchema);
module.exports = Exercise; 
