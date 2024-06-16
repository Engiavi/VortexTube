// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import dotenv from 'dotenv';
// require(dotenv).config({path:'./env'});//correct way to use this but can be write as import statement
import dotenv from 'dotenv';
dotenv.config({path:'./env'});
import  ConnectDB  from './db/dbs.js';

ConnectDB();
/*
import express from 'express';
const app  = express();
// D:\Major_project\VortexTube\src\index.js
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.on("error",(error)=>{
        console.log(error);
        throw error;
    })
    app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
    // console.log('MongoDB connected...');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
})()
*/ 