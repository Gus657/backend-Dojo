const express  = require('express');
const router  = express.Router();
const passport = require('passport');
const Result = require('../models/result');

router.post('/results',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Result.create(body)
    .then(createdResult=>{res.status(201).json(createdResult)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/results',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Result.find({code:body.code, num:body.num})
    .then(readedResult=>{res.status(200).json(readedResult)})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/results',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Result.deleteMany({code:body.code},{
        useFindAndModify:false})
    .then(deletedResult=>{res.status(200).json()})
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