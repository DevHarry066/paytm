const mongoose = require('mongoose');

const MONGO_URI = '';

const connectDB = async () => {
    const conn = mongoose.connect(MONGO_URI, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    });
    console.log(`MongoDB database connected with PayTM collection: ${(await conn).connection.host}`.cyan.underline.bold);
}


module.exports = connectDB;
