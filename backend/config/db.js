import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

let dbconnect=async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL)
   //  console.log("Database Connected")
   } catch (error) {
      // console.log("db not connected____",error.message)
   }

}

export default dbconnect