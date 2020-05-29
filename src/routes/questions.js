const express  = require('express');
const router  = express.Router();
const passport = require('passport');
const Question = require('../models/question');

router.post('/questions',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.create(body)
    .then(createdQuestion=>{res.status(201).json(createdQuestion)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/question',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.findOne({idQuestion:body.idQuestion})
    .then(readedQuestion=>{res.status(200).json(readedQuestion)})
    .catch(err => {res.status(400).json(err)})
});

router.get('/questions',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.find({code:body.code, num:body.num})
    .then(readedQuestion=>{res.status(200).json(readedQuestion)})
    .catch(err => {res.status(400).json(err)})
});

router.patch('/questions',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.findOneAndUpdate({code:body.code, num:body.num},body,{new:true,
    useFindAndModify:false})
    .then(modifiedQuestion=>{res.status(200).json(modifiedQuestion)})
    .catch(err => {res.status(400).json(err)})
});

router.delete('/questions',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.deleteMany({code:body.code},{
        useFindAndModify:false})
    .then(deletedQuestion=>{res.status(200).json()})
    .catch(err => {res.status(400).json(err)})
});
router.delete('/question',isAuthenticated,(req, res)=>{
    const {body} = req;
    return Question.findOneAndDelete({idQuestion:body.idQuestion},{
        useFindAndModify:false})
    .then(deletedQuestion=>{res.status(200).json()})
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