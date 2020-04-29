const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const answerSchema= new Schema({
    answer: String,
    num: String,
    code: String
});

const Answer = mongoose.model('answers',answerSchema);
module.exports = Answer;