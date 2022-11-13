const { db } = require('../config'); //configurations

exports.get = (req, res) => {
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
}

exports.post = (req,res) => {
    const body = req.body;
    db.users.push(body);
    res.status(200).json({
        success:true,
        message: 'User added',
        user: db.users
    })
}

exports.put = (req,res) => {
    const body = req.body;
    db.users[0] = body;
    res.status(200).json({
        success:true,
        message: 'User updated',
        user: db.users[0]
    })
}

exports.patch = (req,res) => {
    const body = req.body;
    db.users[body.id].age = body.age;
    res.status(200).json({
        success:true,
        message: 'Age updated',
        user: db.users[body.id]
    })
}

exports.delete = (req,res) => {
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
}