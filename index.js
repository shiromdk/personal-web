//IMPORTS
const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()






//EXPRESS SETUP
const app = express();
app.use('/', require('./server/routes/routes'));
app.use('/admin', require('./server/routes/admin'));
app.use('/auth', require('./server/routes/auth'));

//MIDDLEWARE config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//Passport SETUP

passport.use(
  new GoogleStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:'/auth/google/callback'
},(accessToken)=>{
  console.log(accessToken);
})
);

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
