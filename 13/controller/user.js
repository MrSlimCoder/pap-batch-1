const db = require('../model');

exports.get = async (req, res) => {
    const body = req.body;
    try {
       const user = await db.user.findOne(body);
       if(!user || user?.delete) {
        res.status(400).json({
            success: false,
            message: 'User not found'
        })
    }
    else {
    res.status(200).json({
        success: true,
        message: 'User found',
        user
    })
   }
    }
    catch {
        res.status(400).json({
            success:false,
            message: 'User not found',
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

exports.put = async (req,res) => {
    const body = req.body;
    try {
        const user = await db.user.findOneAndUpdate({email: body?.email}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'User updated',
            user
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'User not updated'
        })
    }
}

exports.patch = async (req,res) => {
    const body = req.body;
    try {
        const user = await db.user.findOneAndUpdate({email: body?.email}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'User fields updated',
            user
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'User fields not updated'
        })
    }
}

exports.delete = async (req,res) => {
    const body = req.body;
    try {
        const user = await db.user.findOneAndUpdate({email: body?.email}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'User deleted',
            user
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'User not deleted'
        })
    }
}