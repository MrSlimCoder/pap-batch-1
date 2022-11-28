const db = require('../model');

exports.get = (req, res) => {
    // Use findOne method with email query/condition
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

exports.post = async (req,res) => {
    const body = req.body;
    try {
    const user = new db.user(body);
    const response = await user.save();
    res.status(200).json({
        success:true,
        message: 'User added',
        user: response
    })
    }
    catch {
        res.status(400).json({
            success:false,
            message: 'User not added',
        })
    }
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