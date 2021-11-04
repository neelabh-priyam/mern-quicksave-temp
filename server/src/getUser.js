const mongoose = require("mongoose");
const userModel = require("./user.model");

const getUser = async (email = "x") => {
    try {
        const user = await userModel.find({ email });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUsers = async () => {
    try {
        const user = await userModel.find();
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = { getUser, getUsers };
