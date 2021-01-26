/* 
File: auth.js - Date - 11/14/2020
 ---- Team Members ----​

Fabio Santiago Luiz​ - 301077364​
Thu Nhat Phan Vo​ - 301157562 ​
Franz Cadiente - 301098663​
Abdullah Syed​ - 301133737 ​
Prabaldeep Kaur - 301103203 ​
Zhen Wang​ - 301104020​

---- Course Info ----​

Course Name​ - Web Application Dev​ - COMP229.SEC006​
Professor​ - Aderson Oliveira ​
Project Type​ - Incidents Management​     
 */

let express = require('express');
let passport = require('passport');
let router = express.Router();

// @desc Auth with Google
//@route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email'] }));

// @desc Google auth callback
//@route GET /auth/google/callback
router.get('/google/callback', 
        passport.authenticate('google', {failureRedirect: '/'}), 
        (req, res) => {
            res.redirect('/')
        });

module.exports = router;