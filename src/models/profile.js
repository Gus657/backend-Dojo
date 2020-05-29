const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const profileSchema= new Schema({
    user: String,
    name: String,
    lastName: String,
    photo: String, 
});

const Profile = mongoose.model('profile',profileSchema);
module.exports = Profile;