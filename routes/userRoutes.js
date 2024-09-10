const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

//Create User
router.post('', async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    console.log(req.body);
    try {
        await user.save();
    
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;