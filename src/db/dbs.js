import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";
import dotenv from 'dotenv';
dotenv.config();
 const ConnectDB = async () => {
    try {
       const connectionInst= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected...${connectionInst.connection.host}`);
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}
export default ConnectDB;