const express = require('express'); // package require
const app = express(); // express.js minimal setup/container
const bodyParser = require('body-parser'); // included in express.js

// postman/frontend data convert to json by using body parser 
app.use(bodyParser.json()); //middleware

// APPLICATION PORT
const PORT = 3000;

// Db Object (Global)
let db = {
    users: [{
    id: 0,
    firstName: 'Vivek',
    lastName: 'Anand',
    age: 25,
    delete: false
    }]
}

// API - Application Programming Interface

// API (GET, POST, PUT, DELETE, PATCH) - POSTMAN REQUIRED

// Request - request data from browser/frontend 
// Response - send response data to frontend

// GET API - Send response to frontend (get)
app.get('/', (req, res) => {
    const body = req.body;
    if(db.users[body.id].delete) {
        res.status(400).json({
            success: false,
            message: 'User not found'
        })
    }
    else {
    res.status(200).json({
        success: true,
        message: 'User found',
        user: db.users[body.id]
    })
   }
})

// POST API - Send data from frontend to backend (create)
app.post('/', (req,res) => {
    const body = req.body;
    db.users.push(body);
    res.status(200).json({
        success:true,
        message: 'User added',
        user: db.users
    })
})

// PUT API - Send data from frontend to backend (update - whole data)
app.put('/', (req,res) => {
    const body = req.body;
    db.users[0] = body;
    res.status(200).json({
        success:true,
        message: 'User updated',
        user: db.users[0]
    })
})

// PATCH API - Send data from frontend to backend (update - only few fields)
app.patch('/', (req,res) => {
    const body = req.body;
    db.users[body.id].age = body.age;
    res.status(200).json({
        success:true,
        message: 'Age updated',
        user: db.users[body.id]
    })
})

// DELETE API - Send data from frontend to backend (delete - whole data)
app.delete('/', (req,res) => {
    const body = req.body;
    if(db.users[body.id].id === body.id){
    db.users[body.id].delete = true;
    res.status(200).json({
        success:true,
        message: 'User deleted'
    })
    } else {
        res.status(400).json({
            success:false,
            message: 'User Not deleted'
        })
    }
})

// Listen on PORT 3000
app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`Server is Running on PORT ${PORT}`);
});