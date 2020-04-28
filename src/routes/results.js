const express  = require('express');
const router  = express.Router();
const passport = require('passport');


router.get('/results',isAuthenticated,(req, res)=>{
    res.send({"message":"Results"})
})



function isAuthenticated(req, res, next){
    if  (req.isAuthenticated())
    {
        return next()
    }
    res.redirect('/');
}

module.exports = router;