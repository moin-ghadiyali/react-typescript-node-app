import mongoose from 'mongoose';

let dev_db_url = 'mongodb://localhost:27017/reacttest';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
});

mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports.mongoose;