const mongoose = require("mongoose");
const userModel = require("./user.model");

const setUsers = async ({ name = "x", email = "x", password = "x" }) => {
    try {
        const newUser = await new userModel({ name, email, password }).save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = setUsers;
