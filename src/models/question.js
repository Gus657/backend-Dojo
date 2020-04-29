const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const questionSchema= new Schema({
    code: String,
    num: String,
    question: String,
});

const Question = mongoose.model('question',questionSchema);
module.exports = Question;