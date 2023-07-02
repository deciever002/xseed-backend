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
    origin: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Creates a Persistent session in the db.
const sessionStore = MongoStore.create({
    mongoUrl: process.env.CONNECTION_STRING
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    store: sessionStore,
    resave: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

app.use((req,res,next) => {
    console.log(req.user);
    console.log(req.session);
    next();
})

app.use(passport.initialize());
app.use(passport.session());


app.use('/',require('./routes/index'))

//listen app on port
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`)
})