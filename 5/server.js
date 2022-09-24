const express = require('express'); // package require
const app = express(); // express.js minimal setup/container

// API - Application Programming Interface

// API (GET, POST, PUT, DELETE, PATCH)
app.get('/', (request, response) => {
    response.send('Hello World');
})

// GET API - Send response to browser/frontend
// Request - request data from browser/frontend 
// Response - send response data to frontend

// Listen on PORT 3000
app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is Running on PORT 3000");
});