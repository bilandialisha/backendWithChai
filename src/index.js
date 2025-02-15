// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB();










/*
-----------This is another way of connecting db--------------

import {DB_NAME} from "./constants";
import express from 'express'
const app = express();
( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Not able to run due to: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
})()
*/