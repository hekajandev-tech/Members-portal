import axios from 'axios';

//Base URL of your Node.js backend
const BASE_URL = "http://localhost:5000/member-api";


//Get all members
export const getAllMembers = async () => {
    return await axios.get(`${BASE_URL}/members`);
};



//Add a new member
export const addMember = async (member) => {
    return await axios.post(`${BASE_URL}/newmember`,member);
};

//Update a member
export const updateMember = async (id) => {
    return await axios.post(`${BASE_URL}/updatemember/${id}`);
};


//Delete a member
export const deleteMember = async (id) => {
    return await axios.post(`${BASE_URL}/delete/${id}`);
};