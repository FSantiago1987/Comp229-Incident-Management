/* 
File: home.js - Date - 11/14/2020
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

let homeController = require('../controllers/home');
let authController = require('../controllers/auth');

/* GET home page. */
router.get('/', homeController.displayHomePage);

/* GET home page. */
router.get('/home', homeController.displayHomePage);

/* GET Route for displaying the Login Page */
router.get('/login', authController.displayLoginPage);

/* POST Route for displaying the Login Page */
router.post('/login', authController.processLoginPage);

/* GET Route for displaying the Register Page */
router.get('/register', authController.displayRegisterPage);

/* POST Route for displaying the Register Page */
router.post('/register', authController.processRegisterPage);

/* GET Route to perform UserLogout */
router.get('/logout', authController.performLogout);

module.exports = router;
