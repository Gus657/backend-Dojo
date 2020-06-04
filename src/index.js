const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'gus657',
    resave: false,
    saveUninitialized: false
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./database');
require('./passport/auth');
app.use(require('./routes/auths'));
app.use(require('./routes/profile'));
app.use(require('./routes/intreviews'));
app.use(require('./routes/questions'));
app.use(require('./routes/answers'));
app.use(require('./routes/results'));



app.listen(PORT, ()=>{console.log('Server Running')});