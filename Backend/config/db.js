const mongoose = require("mongoose");
require("dotenv").config()

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/my_database';

const connectDatabase = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log("ERROR While connecting to DB",err.message)
    })
};

module.exports = connectDatabase;