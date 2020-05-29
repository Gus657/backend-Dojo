const express  = require('express');
const router  = express.Router();
const passport = require('passport');

const Answer= require('../models/answer');

router.post('/answers',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Answer.create(body)
    .then(createdAnswer=>{res.status(201).json(createdAnswer)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/answers',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Answer.find({code:body.code, num:body.num})
    .then(readedAnswer=>{res.status(200).json(readedAnswer)})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/answers',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Answer.deleteMany({code:body.code},{
        useFindAndModify:false})
    .then(deletedAnswer=>{res.status(200).json()})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/answer',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Answer.deleteMany({idAnswer:body.idAnswer},{
        useFindAndModify:false})
    .then(deletedAnswer=>{res.status(200).json()})
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