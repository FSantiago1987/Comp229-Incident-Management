/* 
File: googleUser.js - Date - 11/14/2020
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

// require modules for the User Model
let mongoose = require('mongoose');

let GoogleUser = new mongoose.Schema
(
    {
        username: 
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        displayName:
        {
            type: String,
            required: true
        },
        created:
        {
            type: Date,
            default: Date.now,
        },
        update:
        {
            type: Date,
            default: Date.now,
        }

    },
    {
        collection: "users"
    }
);

module.exports = mongoose.model('GoogleUser', GoogleUser);