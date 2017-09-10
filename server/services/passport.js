const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile,done) => {
      User.findOne({googleId:profile.id})
        .then((user)=>{
          if(user){
            //User found
            console.log(user);
            done(null,user);
          }else{
            //Create new user.
            new User({googleId:profile.id})
              .save()
              .then(user=>{
                done(null,user);
              });
          }
        });

  })
);
