const mongoose = require('mongoose');

//  .connect() returns a promise, so we use async await func
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //  Prevent some warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;