import mongoose from 'mongoose'
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`) // mongodb ke url ka connection jaha ho raha h vo lele or ye host specify krta h 
    } catch (error) {
        console.error("MongoDB connection Failed: ", error)
        process.exit(1); //search and read about it
    }
}

export default connectDB;