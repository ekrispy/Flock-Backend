const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get single user
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create new user
const createUser = async (req, res) => {
    const { username, email, passwordHash}= req.body;

    try {
        const newUser = await newUser.create({
            username,
            email,
            passwordHash
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    
}
}

module.exports = { getAllUsers, getSingleUser, createUser }