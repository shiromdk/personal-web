const express = require('express');
const path = require('path');
const passport = require('passport');

const router = express.Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

router.get(
    '/google/callback',
    passport.authenticate('google')
  );

router.get('/api/current_user',(req,res)=>{
  res.send(req.user);
});

module.exports = router;
