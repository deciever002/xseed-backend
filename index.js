require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongo');
const db = require('./mongoose');
const passport = require('passport');
const passportLocalStrategy = require('./passportConfig')

//initialized express app
const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));
app.set('trust proxy',1);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Creates a Persistent session in the db.
const sessionStore = MongoStore.create({
    mongoUrl: process.env.CONNECTION_STRING
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    store: sessionStore,
    resave: false,
    cookie: {
        secure: true,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24,
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use((req,res,next) => { console.log(req.session); next();});


app.use('/',require('./routes/index'));
app.get('/',(req,res) => {
    res.send('App started running');
});

//listen app on port
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`)
});

module.exports = app;
