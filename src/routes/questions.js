const express  = require('express');
const router  = express.Router();
const passport = require('passport');


router.get('/questions',isAuthenticated,(req, res)=>{
    res.send({"message":"questions"})
})



function isAuthenticated(req, res, next){
    if  (req.isAuthenticated())
    {
        return next()
    }
    res.redirect('/');
}

module.exports = router;