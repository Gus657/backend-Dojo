const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const resultSchema= new Schema({
    title: String,
    owner: String,
    code: String
});

const Result = mongoose.model('results',resultSchema);
module.exports = Result;