const express  = require('express');
const router  = express.Router();
const passport = require('passport');
const Intreview = require('../models/intreview');


router.post('/intreviews',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Intreview.create(body)
    .then(createdIntreview=>{res.status(201).json(createdIntreview)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/intreviews',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Intreview.find({owner:body.owner})
    .then(readedIntreview=>{res.status(200).json(readedIntreview)})
    .catch(err => {res.status(400).json(err)})
});

router.patch('/intreviews',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Intreview.findOneAndUpdate({code:body.code},body,{new:true,
    useFindAndModify:false})
    .then(modifiedIntreveiw=>{res.status(200).json(modifiedIntreveiw)})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/intreviews',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Intreview.deleteMany({owner:body.owner},{
        useFindAndModify:false})
    .then(deletedIntreview=>{res.status(200).json()})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/intreview',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Intreview.findOneAndDelete({code:body.code},{
        useFindAndModify:false})
    .then(deletedIntreview=>{res.status(200).json()})
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