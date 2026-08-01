const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const MemberModel = require('./MemberSchema');

// Connecting to database
const query = 'mongodb://localhost:27017/Member'

mongoose.connect(query)
    .then(() => {
        console.log("Database connected Successfully!");
    })
    .catch((error) => {
        console.log("Error in connecting tp the database: " + error);
    });


// get all the member details
router.get('/members', async (req, res) => {
    try {
        const allMembers = await MemberModel.find({});
        res.status(200).json(allMembers);
    } catch(error) {
        console.error("Error retriving all employees", error);
        res.status(500).send("Internal Server error");
    }
        
});


// Adding details via POSTMAN "POST" method
router.post('/newmember', async (req, res) => {
    try {
        const newMember = new MemberModel();
        newMember.MEMBER_ID = req.body.MEMBER_ID;
        newMember.FULL_NAME = req.body.FULL_NAME;
        newMember.NIC = req.body.NIC;
        newMember.GENDER = req.body.GENDER;
        newMember.DATE_OF_BIRTH = req.body.DATE_OF_BIRTH;
        newMember.EMAIL = req.body.EMAIL;
        newMember.PHONE_NO = req.body.PHONE_NO;
        newMember.ADDRESS = req.body.ADDRESS;
        newMember.MEMBER_TYPE = req.body.MEMBER_TYPE;
        newMember.REGISTRATION_DATE = req.body.REGISTRATION_DATE;

        const data = await newMember.save();
        res.status(201).send("Member Data addedd successfully!");

    } catch (error){
        console.error("Error saving the data", error);
        res.status(500).send("Internal Server error");
    }
});


// Finding the member data
router.get('/findmember/:id', async (req, res) => {
    try{
        const targetId = req.params.id;
        const findedMember = await EmployeeModel.findOne({MEMBER_ID : targetId});

        if (!findedMember) {
            return res.status(484).json({message: "No employees found!"});
        }
        res.status(200).json(findedMember);
    }catch(error){
        console.error("Error retriving first employee", error);
        res.status(500).send("Internal server Error");
    }
});


//Update a member data [Method 01]
router.put('/updatemember/:id', async (req, res) => {
    try {
        const targetId = req.params.id;
        const UpdatedMember = await MemberModel.findOne({MEMBER_ID: targetId});

        UpdatedMember.MEMBER_ID = req.body.MEMBER_ID;
        UpdatedMember.FULL_NAME = req.body.FULL_NAME;
        UpdatedMember.NIC = req.body.NIC;
        UpdatedMember.GENDER = req.body.GENDER;
        UpdatedMember.DATE_OF_BIRTH = req.body.DATE_OF_BIRTH;
        UpdatedMember.EMAIL = req.body.EMAIL;
        UpdatedMember.PHONE_NO = req.body.PHONE_NO;
        UpdatedMember.ADDRESS = req.body.ADDRESS;
        UpdatedMember.MEMBER_TYPE = req.body.MEMBER_TYPE;
        UpdatedMember.REGISTRATION_DATE = req.body.REGISTRATION_DATE;


        const data = await UpdatedMember.save();
        res.status(201).send("Member Data addedd successfully!");

    } catch (error){
        console.error("Error saving the data", error);
        res.status(500).send("Internal Server error");
    }
});


//Update a member data [Method 02]
router.put('/updatemember/:id', async (req, res) => {
    try {
        const targetId = req.params.id;

        const UpdatedMember = await MemberModel.findOneAndUpdate(
            {MEMBER_ID: targetId},
            req.body,
            {
                new:true,
                // the below line that updates all the updated inputs from user
                runValidators:true
            }
        
        );     

        if(!UpdatedMember) {
            return res.status(404).json({
                message : "Members not found"
            });
        }

        const data = await UpdatedMember.save();
        res.status(201).send("Member Data addedd successfully!");

    } catch (error){
        console.error("Error saving the data", error);
        res.status(500).send("Internal Server error");
    }
});

// Deleting a data from the database using "DELETE" from POSTMAN
router.delete('/delete/:id', async (req, res) => {
    try{
        const targetId = req.params.id;

        const result = await MemberModel.deleteOne({MEMBER_ID: targetId});

        if (result.deletedCount === 0) {
            return res.status(404).json({message: "Member not found to delete"});        
        }
        res.status(200).json({message: "Member deleted successfully!"});

    }catch (error) {
        console.error("Error deleting the employee", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;