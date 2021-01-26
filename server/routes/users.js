/* 
File: user.js - Date - 11/14/2020
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

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;