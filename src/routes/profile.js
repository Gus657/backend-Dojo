const express  = require('express');
const router  = express.Router();
const passport = require('passport');

const Profile = require('../models/profile');

router.post('/profiles',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Profile.create(body)
    .then(createdProfile=>{res.status(201).json(createdProfile)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/profiles',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Profile.findOne({user:body.user})
    .then(readedProfile=>{res.status(200).json(readedProfile)})
    .catch(err => {res.status(400).json(err)})
});

router.patch('/profiles',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Profile.findOneAndUpdate({user:body.user},body,{new:true,
    useFindAndModify:false})
    .then(modifiedProfile=>{res.status(200).json(modifiedProfile)})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/profiles',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Profile.findOneAndDelete({user:body.user},{
        useFindAndModify:false})
    .then(deletedProfile=>{res.status(200).json()})
    .catch(err => {res.status(400).json(err)})
});

function isAuthenticated(req, res, next){
    if  (req.isAuthenticated())
    {
        return next()
    }
    res.redirect('/');
}

module.exports = router;