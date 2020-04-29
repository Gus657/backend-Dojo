const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const resultSchema= new Schema({
    positive: String,
    negative: String,
    neutral: String,
    num: String,
    code: String
});

const Result = mongoose.model('results',resultSchema);
module.exports = Result;