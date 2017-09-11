//IMPORTS

const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const pug = require('pug');
require('dotenv').config()
require('./server/models/User');
require('./server/services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI).catch(err=>{
  console.log(err);
});

//EXPRESS SETUP
const app = express();
//VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
//MIDDLEWARE config



app.use(passport.initialize());
app.use(passport.session());

//ROUTE SETUP
app.use('/', require('./server/routes/routes'));
app.use('/admin', require('./server/routes/admin'));
app.use('/auth', require('./server/routes/auth'));

app.use(express.static('./client/dist/js'));
app.use(express.static('./server/public/'));



app.listen(process.env.PORT || 8080, () => {
  if(process.env.PORT){
    console.log(
      `Server is running on http://localhost:${process.env.PORT} or http://127.0.0.1:${process.env.PORT}`
    );
  }else{
    console.log(
      'Server is running on http://localhost:8080 or http://127.0.0.1:8080'
    );
  }

});
