const mongoose = require('mongoose');

//creating the schema 
const MemberSchema = new mongoose.Schema({
    MEMBER_ID : String,
    FULL_NAME : String,
    NIC : String,
    GENDER : String,
    DATE_OF_BIRTH: Date,
    EMAIL: String,  
    PHONE_NO : Number,
    ADDRESS : String,
    MEMBER_TYPE : String,
    REGISTRATION_DATE: Date
});

//exporting the model
module.exports = mongoose.model(
    'member' , MemberSchema , 'Members'
);