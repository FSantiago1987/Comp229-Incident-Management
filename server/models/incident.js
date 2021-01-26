/* 
File: incident.js - Date - 11/14/2020
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

let mongoose = require('mongoose');

// create a model class
let incidentModel = mongoose.Schema({
    description: String,
    priority: {
        type: String,
        default: "Normal",         // e.g. Low, Normal, High
        trim: true
    },
    customerInfo: String,
    recordNumber: String,       // e.g. 130418-0000001 for Apr 13 2018, ticket no 1
    narrative: String,          // e.g. 25/10/2020 - Changed status "normal" to "high"; 6/11/2020 - Ticket closed
    narrativeLatest: String,
    status: {
        type: String,
        default: "New",         // e.g. New, In Progress, Closed
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
},{
    collection: 'incidents'
});

module.exports = mongoose.model('Incident', incidentModel);