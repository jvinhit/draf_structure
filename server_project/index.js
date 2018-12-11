const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const mongosee = require('mongoose');
const app = express();
// import your config
const dbConfigs = require('./config/keys');
const users = require('./routes/api/users');

// required & optional middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    key: 'users_id',
    secret: 'randomStaff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24*60*60
    }
}));

app.use( (req, res, next) => {
    req.timeRequest = Date.now();
    console.log("Log request");
    next();
});

// init & config passport
require('./config/passport')(passport);

// connect mongo
const dbURI = `${dbConfigs.host}:${dbConfigs.port}\/${dbConfigs.databse}`;
mongosee.connect(dbURI, { useNewUrlParser: true})
        .then(() => console.log("Mongodb connect success"))
        .catch( err => console.log("Mongo could not connect " + err));

// routes config
app.use('/api/users', users);
// start app
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running in port: ${port}`)
})

