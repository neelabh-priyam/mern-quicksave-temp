const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
})();
