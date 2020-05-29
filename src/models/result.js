const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const resultSchema= new Schema({
    positive: String,
    negative: String,
    neutral: String,
    date: String,
    hour: String,
    num: String,
    code: String,
    idResult: String,
});

const Result = mongoose.model('results',resultSchema);
module.exports = Result;