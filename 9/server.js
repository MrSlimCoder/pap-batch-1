const express = require('express'); // package require
const app = express(); // express.js minimal setup/container

const PORT = 3000;

// API - Application Programming Interface

// API (GET, POST, PUT, DELETE, PATCH) - POSTMAN REQUIRED

// Request - request data from browser/frontend 
// Response - send response data to frontend

// GET API - Send response to browser/frontend (get)
app.get('/', (req, res) => {
    res.send('Hello World GET');
})

// POST API - Send data from frontend to backend (create)
app.post('/', (req,res) => {
    res.send('Hello World POST');
})

// PUT API - Send data from frontend to backend (update - whole data)
app.put('/', (req,res) => {
    res.send('Hello World PUT');
})

// PATCH API - Send data from frontend to backend (update - only few fields)
app.patch('/', (req,res) => {
    res.send('Hello World PATCH');
})

// DELETE API - Send data from frontend to backend (delete - whole data)
app.delete('/', (req,res) => {
    res.send('Hello World DELETE');
})

// Listen on PORT 3000
app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`Server is Running on PORT ${PORT}`);
});