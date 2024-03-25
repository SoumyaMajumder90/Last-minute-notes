const mongoose = require("mongoose");
const URI =process.env.MONGODBURI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection ssuccesful to DB");
    } catch (error) {
        console.log("database connection failed");
        console.log(error);
        process.exit(0);
    }
}
module.exports= connectDb;