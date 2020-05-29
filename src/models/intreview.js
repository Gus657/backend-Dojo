const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const intreviewSchema= new Schema({
    title: String,
    owner: String,
    code: String,
});

const Intreview = mongoose.model('intreviews',intreviewSchema);
module.exports = Intreview;