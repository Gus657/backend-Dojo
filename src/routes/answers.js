const express  = require('express');
const router  = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/anwers',isAuthenticated,(req, res)=>{
    res.send({"message":"answers"})
})



function isAuthenticated(req, res, next){
    if  (req.isAuthenticated())
    {
        return next()
    }
    res.redirect('/');
}

module.exports = router;