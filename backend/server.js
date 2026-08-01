const express = require('express');
const cors = require('cors');
const memberapi = require('./api')

//creating the server app
const app = express();

//Enable cors for all routes
app.use(cors());
//Parse incoming Json data
app.use(express.json());


//Test endpoint
app.use('/member-api', memberapi);


//code for listening
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
});